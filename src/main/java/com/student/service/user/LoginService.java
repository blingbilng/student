package com.student.service.user;

import com.student.pojo.user.UserInfoRequestDTO;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author ll
 * @date 2018/4/12 15:20
 */
public interface LoginService {
    /**
     * 登陆
     *
     * @param userInfo
     * @param request
     * @param response
     * @return
     */
    boolean login(UserInfoRequestDTO userInfo, HttpServletRequest request, HttpServletResponse response);

    /**
     * 退出
     *
     * @param request
     * @param response
     */
    void logout(HttpServletRequest request, HttpServletResponse response);

    /**
     * 登录情况判定
     *
     * @return
     */
    Boolean isLogin(HttpServletRequest request, HttpServletResponse response);
}
