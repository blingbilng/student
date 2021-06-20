package com.student.pojo.user;

import com.alibaba.fastjson.annotation.JSONField;

/**
 * @author ll
 * @date 2018/4/12 16:59
 */
public class UserInfoRequestDTO {

    @JSONField(name = "user_uid")
    private String userUid;

    @JSONField(name = "user_name")
    private String userName;

    @JSONField(name = "login_name")
    private String loginName;

    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserUid() {
        return userUid;
    }

    public void setUserUid(String userUid) {
        this.userUid = userUid;
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
}
