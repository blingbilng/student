package com.student.service.user.impl;

import com.student.common.Constants;
import com.student.common.ThreadVariable;
import com.student.common.exception.BusinessValidationException;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.IpAddressUtil;
import com.student.common.utils.RedisUtils;
import com.student.pojo.user.*;
import com.student.service.user.LoginService;
import com.student.service.user.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * @author ll
 * @date 2018/4/12 15:21
 */
@Service("loginService")
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserService userService;

    private static final int SESSION_TIME_OUT = 3600;

    /**
     * 登录
     * @param requestDTO
     * @param request
     * @param response
     * @return
     */
    @Override
    public boolean login(UserInfoRequestDTO requestDTO, HttpServletRequest request, HttpServletResponse response) {
        // 获取用户
        UserInfoModel userInfo = userService.getUserInfo(requestDTO);

        // 验证用户
        if (!doAdminUserLoginCheck(requestDTO, userInfo)) {
            throw new BusinessValidationException("密码错误,请确认后重新登陆");
        }



        // 创建session，赋值ThreadLocal
        EducateSession session = generateLoginedSession(userInfo, request);
        // 获取用户拥有的权限菜单
        UserInfoDTO user = userService.findFullAdminUserByUserUid(userInfo.getUserUid());

        //将菜单以及用户信息存session
        proccessPermissions(request, user);

        ThreadVariable.setSession(session);
        ThreadVariable.setUser(userInfo);

        // 将session存到redis中
        cacheSession(session);

        return true;
    }

    /**
     * 退出 删除存放session的数据
     * @param request
     * @param response
     */
    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response) {
        ThreadVariable.setSession(null);
        RedisUtils.remove(request.getSession().getId());
        request.getSession().invalidate();
    }

    /**
     * 判断是否登录过
     * @param request
     * @param response
     * @return
     */
    @Override
    public Boolean isLogin(HttpServletRequest request, HttpServletResponse response) {


        String sid = request.getSession().getId();

        EducateSession session = getSession(sid);
        if (session == null || !session.isLogin()) {
            return false;
        }

        if (isTimeOut(session)) {
            return false;
        }
        // 更新session信息
        session = updateSessionBySessionId(session, request);
        // 将session信息放入线程中
        ThreadVariable.setSession(session);
        // 将User信息放入线程中
        UserInfoDTO user = userService.findFullAdminUserByUserUid(session.getUserUid());
        proccessPermissions(request, user);
        ThreadVariable.setUser(user);
        // 缓存session
        cacheSession(session);
        return true;
    }

    /**
     * 超时判定
     *
     * @param session
     * @return
     */
    private Boolean isTimeOut(EducateSession session) {
        long current = Calendar.getInstance().getTime().getTime();
        long lastSessionAccessTime = session.getAccessTime().getTime();

        if ((current - lastSessionAccessTime) > SESSION_TIME_OUT * 1000) {
            // 删除用户session信息
            RedisUtils.remove(session.getSessionId());
            return true;
        }
        return false;
    }

    private EducateSession getSession(String sid) {
        if (StringUtils.isBlank(sid)) {
            return null;
        }
        String se = (String) RedisUtils.get(sid);
        if (StringUtils.isNotEmpty(se)) {
            return FastJsonUtil.toBean(se, EducateSession.class);
        }
        return null;
    }

    private EducateSession updateSessionBySessionId(EducateSession session, HttpServletRequest request) {
        session.setAccessIp(IpAddressUtil.getIpAddr(request));
        session.setLastUrl(request.getRequestURI());
        session.setAccessTime(Calendar.getInstance().getTime());
        return session;
    }

    private boolean doAdminUserLoginCheck(UserInfoRequestDTO adminUser, UserInfoModel userInfo) {
        if (null == userInfo || null == adminUser.getPassword()
                || !adminUser.getPassword().equals(userInfo.getPassword())) {
            return false;
        }
        return true;
    }

    private EducateSession generateLoginedSession(UserInfoModel userInfo, HttpServletRequest request) {

        String sessionId = request.getSession().getId();
        RedisUtils.remove(sessionId);

        EducateSession session = new EducateSession();
        session.setAccessIp(IpAddressUtil.getIpAddr(request));
        session.setLastUrl(request.getRequestURI());
        session.setSessionId(sessionId);

        session.setLoginIp(session.getAccessIp());
        session.setUserName(userInfo.getUserName());
        session.setLoginName(userInfo.getLoginName());
        session.setAccessTime(Calendar.getInstance().getTime());
        session.setLogin(true);
        session.setUserUid(userInfo.getUserUid());
        session.setLoginDate(Calendar.getInstance().getTime());

        return session;
    }

    /**
     * 将session放入内存中
     *
     * @param session
     */
    private void cacheSession(EducateSession session) {
        String json = FastJsonUtil.toJSONString(session);
        RedisUtils.set(session.getSessionId(), json, (long) (SESSION_TIME_OUT * 1000));
    }

    private void proccessPermissions(HttpServletRequest request, UserInfoDTO user) {

        // 菜单
        List<Permissions> list = user.getPermissions();

        List<Permissions> permissions = new ArrayList<>();
        // 父级菜单
        List<Permissions> module = new ArrayList<>();
        // 全部菜单
        Map<String, ModuleDTO> moduleMenu = new HashMap<>();
        // 组装菜单
        for (Permissions p : list) {
            if (Constants.TYP_MODULE.equalsIgnoreCase(p.getCategory())) {
                module.add(p);
                ModuleDTO moduleDTO = new ModuleDTO();
                moduleDTO.setPermissionUid(p.getPermissionUid());
                moduleDTO.setPermissionName(p.getPermissionName());
                moduleDTO.setMenu(getByParentId(p.getParentUid(), list));
                moduleMenu.put(p.getPermissionUid(), moduleDTO);
            }
        }
        // 往session中添加用户信息
        request.getSession().setAttribute(Constants.USERINFO, user);
        // 往session中添加菜单信息
        request.getSession().setAttribute(Constants.MENU, moduleMenu);
        // 获取选择的父级菜单
        ModuleDTO selectedModule = (ModuleDTO) request.getSession().getAttribute("selectedModule");
        if (selectedModule == null) {
            request.getSession().setAttribute("selectedModule", moduleMenu.get(module.get(0).getPermissionUid()));
        }

        request.getSession().setAttribute(Constants.TYP_MODULE, module);
        request.getSession().setAttribute(Constants.PERMISSION, permissions);
    }

    /**
     * 查询父菜单下的子菜单
     *
     * @param parentUid
     * @param list
     * @return
     */
    private List<Permissions> getByParentId(String parentUid, List<Permissions> list) {
        List<Permissions> ret = new ArrayList<>();
        for (Permissions p : list) {
            if (!p.isParent() && p.getPermissionUid() != null && parentUid.equals(p.getParentUid())) {
                ret.add(p);
            }
        }
        return ret;
    }

}
