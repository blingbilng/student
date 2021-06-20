package com.student.pojo.user;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;
import java.util.Date;

/**
 * @author ll
 * @date 2018/4/12 15:56
 */
public class EducateSession implements Serializable {

    private static final long serialVersionUID = 113247819234819234L;

    @JSONField(name = "user_uid")
    private String userUid;

    @JSONField(name = "user_name")
    private String userName;

    @JSONField(name = "login_name")
    private String loginName;

    @JSONField(name = "session_id")
    private String sessionId;

    @JSONField(name = "access_ip")
    private String accessIp;

    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date accessTime;

    @JSONField(name = "login_ip")
    private String loginIp;

    @JSONField(format = "yyyy-MM-dd HH:mm:ss")
    private Date loginDate;

    @JSONField(name = "last_url")
    private String lastUrl;

    private boolean login;

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

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public String getAccessIp() {
        return accessIp;
    }

    public void setAccessIp(String accessIp) {
        this.accessIp = accessIp;
    }

    public Date getAccessTime() {
        return accessTime;
    }

    public void setAccessTime(Date accessTime) {
        this.accessTime = accessTime;
    }

    public String getLoginIp() {
        return loginIp;
    }

    public void setLoginIp(String loginIp) {
        this.loginIp = loginIp;
    }

    public Date getLoginDate() {
        return loginDate;
    }

    public void setLoginDate(Date loginDate) {
        this.loginDate = loginDate;
    }

    public String getLastUrl() {
        return lastUrl;
    }

    public void setLastUrl(String lastUrl) {
        this.lastUrl = lastUrl;
    }

    public boolean isLogin() {
        return login;
    }

    public void setLogin(boolean login) {
        this.login = login;
    }
}
