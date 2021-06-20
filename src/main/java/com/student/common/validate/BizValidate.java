package com.student.common.validate;

import java.util.Objects;

import org.apache.commons.lang3.StringUtils;

import com.student.common.exception.BusinessValidationException;

/**
 * 简单的业务验证
 *
 * @author 蘑菇
 */
public class BizValidate {

    public static void requireNonEmpty(String obj, String message) {
        if (StringUtils.isEmpty(obj)) {
            throw new BusinessValidationException(message);
        }
    }

    public static void requireNonNull(Object obj, String message) {
        if (Objects.isNull(obj)) {
            throw new BusinessValidationException(message);
        }
    }

    /**
     * 在不为TRUE时抛出异常信息
     *
     * @param express
     * @param message
     */
    public static void requireTrue(boolean express, String message) {
        if (!express) {
            throw new BusinessValidationException(message);
        }
    }


}
