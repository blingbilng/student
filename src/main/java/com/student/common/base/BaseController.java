package com.student.common.base;


import com.student.common.Constants;
import com.student.pojo.user.UserInfoModel;

import javax.servlet.http.HttpServletRequest;

public class BaseController {
    protected String ADMIN_PERFIX = "admin";

    protected String getUserUid(HttpServletRequest request) {
        UserInfoModel userInfo = (UserInfoModel) request.getSession().getAttribute(Constants.USERINFO);
        return userInfo.getUserUid();
    }
}
