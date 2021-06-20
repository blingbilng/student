package com.student.common;

import com.student.pojo.user.EducateSession;
import com.student.pojo.user.UserInfoModel;

import java.util.HashMap;
import java.util.Map;

@SuppressWarnings({"rawtypes", "unchecked"})
public class ThreadVariable {
    private static ThreadLocal<Object> threadLocal = new ThreadLocal<Object>();

    public static void clearThreadVariable() {
        threadLocal.remove();
    }

    public static void setSession(Object session) {
        Map map = (Map) threadLocal.get();
        if (map == null) {
            map = new HashMap();
        }
        map.put(GlobalValue.LOGIN_SESSION_ID, session);
        threadLocal.set(map);
    }

    public static EducateSession getSession() {
        Map map = (Map) threadLocal.get();
        if (map != null) {
            return (EducateSession) map.get(GlobalValue.LOGIN_SESSION_ID);
        }
        return null;
    }

    public static void setUser(UserInfoModel user) {
        Map map = (Map) threadLocal.get();
        if (map == null) {
            map = new HashMap();
        }
        map.put(GlobalValue.LOGIN_USER_ID, user);
        threadLocal.set(map);
    }

    public static UserInfoModel getUser() {
        Map map = (Map) threadLocal.get();
        if (map != null) {
            return (UserInfoModel) map.get(GlobalValue.LOGIN_USER_ID);
        }
        return null;
    }

}