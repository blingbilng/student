package com.student.common.exception;

public class ServiceValidationException extends BaseException {

    private static final int DEFAULT_CODE = 602;

    public ServiceValidationException() {
        super();
        super.setCode(DEFAULT_CODE);
    }

    public ServiceValidationException(String message, Throwable cause) {
        super(message, cause);
        super.setCode(DEFAULT_CODE);
    }
}
