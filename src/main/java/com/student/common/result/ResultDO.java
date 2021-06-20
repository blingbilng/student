package com.student.common.result;

public class ResultDO {

    private int code;
    private String message;
    private Object data;

    public static ResultDO successMessage(String message) {
        ResultDO resultDO = new ResultDO();
        resultDO.setCode(200);
        resultDO.setMessage(message);
        return resultDO;
    }

    public static ResultDO successData(Object data) {
        ResultDO resultDO = new ResultDO();
        resultDO.setCode(200);
        resultDO.setData(data);
        return resultDO;
    }

    public static ResultDO success(String message, Object data) {
        ResultDO resultDO = new ResultDO();
        resultDO.setCode(200);
        resultDO.setMessage(message);
        resultDO.setData(data);
        return resultDO;
    }


    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

}
