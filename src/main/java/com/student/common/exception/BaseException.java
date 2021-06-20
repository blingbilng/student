package com.student.common.exception;

@SuppressWarnings("serial")
public class BaseException extends RuntimeException {

    private static final int DEFAULT_CODE = 600;

    protected int code;

    public BaseException() {
        super();
        setCode(DEFAULT_CODE);
    }

    public BaseException(String message) {
        super(message);
        setCode(DEFAULT_CODE);
    }

    public BaseException(String message, Throwable cause) {
        super(message, cause);
        setCode(DEFAULT_CODE);
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }
}
