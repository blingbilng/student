package com.student.common.exception;

@SuppressWarnings("serial")
public class BusinessValidationException extends BaseException {

    private static final int DEFAULT_CODE = 601;

    public BusinessValidationException() {
        super();
        super.setCode(DEFAULT_CODE);
    }

    public BusinessValidationException(String message) {
        super(message);
        super.setCode(DEFAULT_CODE);
    }
}
