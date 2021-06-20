package com.student.pojo.user;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

/**
 * @author ll
 * @date 2018/4/12 15:23
 */
public class UserInfoModel extends BasicModel {

    @JSONField(name = "user_name")
    private String userName;

    @JSONField(name = "login_name")
    private String loginName;

    private String password;

    @JSONField(name = "user_phone")
    private String userPhone;

    @JSONField(name = "user_type")
    private String userType;

    private String avatar;

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
