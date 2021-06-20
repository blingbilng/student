package com.student.common.base;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.student.common.Constants;

import java.util.HashMap;
import java.util.Map;

public enum BaseCode {

    SUCCESS(200, "Opeartion success"),
    ACCESS_DENIED(403, "Access denied"),
    INTERNAL_SERVER_ERROR(500, "Internal server error"),
    UNKNOWN(-1, "Unknown error"),;


    private int code;
    private String message;

    BaseCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public static BaseCode valueOf(int code) {
        BaseCode ec = values.get(code);
        if (ec != null) {
            return ec;
        }
        return UNKNOWN;
    }

    public static BaseCode valueOfCodeStr(String codeStr) {
        try {
            int code = Integer.valueOf(codeStr);
            BaseCode ec = values.get(code);
            if (ec != null){
                return ec;
            }
            return UNKNOWN;
        } catch (Exception e) {
            return UNKNOWN;
        }
    }

    public static BaseCode codeConvertor(String jsonStr, String before, String after, BaseCode defaultCode) {
        JSONObject jsonResult = JSON.parseObject(jsonStr);
        String serviceCodeStr = jsonResult.getString(Constants.CODE_FLAG);
        String minaCodeStr = serviceCodeStr.replace(before, after);
        BaseCode minaCode = BaseCode.valueOf(Integer.valueOf(minaCodeStr));
        if (minaCode.getCode() == -1) {
            return defaultCode;
        }
        return minaCode;

    }

    private static final Map<Integer, BaseCode> values = new HashMap<Integer, BaseCode>();

    static {
        for (BaseCode ec : BaseCode.values()) {
            values.put(ec.code, ec);
        }
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
