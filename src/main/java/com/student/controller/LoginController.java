package com.student.controller;

import com.student.common.exception.BusinessValidationException;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.user.UserInfoRequestDTO;
import com.student.service.user.LoginService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author ll
 * @date 2018/4/12 14:48
 */
@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping(value = {"/", "/login", "/login.html"})
    public ModelAndView login() {
        return new ModelAndView("admin/login");
    }

    /**
     * 登陆界面 判断账号密码是否错误 以及加载菜单
     *
     * @param request
     * @param response
     * @param payload
     * @return
     */
    @RequestMapping(value = "/adminLogin/doLogin", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object doLogin(HttpServletRequest request, HttpServletResponse response,
                          @RequestBody String payload) {
        UserInfoRequestDTO requestDTO = FastJsonUtil.toBean(payload, UserInfoRequestDTO.class);
        if (StringUtils.isEmpty(requestDTO.getLoginName()) || StringUtils.isEmpty(requestDTO.getPassword())) {
            throw new BusinessValidationException("用户密码不能为空");
        }

        boolean result = loginService.login(requestDTO, request, response);
        return ResultBuilderUtil.buildSuccess(result);

    }

    /**
     * 退出
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = {"/adminLogin/logout"})
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        loginService.logout(request, response);
        return "redirect:/";

    }
}