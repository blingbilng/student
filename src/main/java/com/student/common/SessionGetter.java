package com.student.common;


import javax.servlet.http.HttpServletRequest;

import com.student.pojo.user.ModuleDTO;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Map;


public class SessionGetter {

    private static Object getObjectValue(String key) {
        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = ((ServletRequestAttributes) ra).getRequest();
        return request.getSession().getAttribute(key);
    }

    @SuppressWarnings("unchecked")
    public static ModuleDTO getLeftMenu(String permissionUid) {
        Map<String, ModuleDTO> obj = (Map<String, ModuleDTO>) getObjectValue(Constants.MENU);
        return obj.get(permissionUid);
    }

}