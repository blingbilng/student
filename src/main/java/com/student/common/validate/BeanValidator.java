package com.student.common.validate;

import java.util.Set;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

import org.springframework.stereotype.Component;

@Component("beanValidator")
public class BeanValidator<T> {

    public ValidateResult validateExtra(T domain) {
        return validate(domain);
    }

    public ValidateResult validate(T domain, Class<?>... groups) {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        return convert(validator.validate(domain, groups), new ValidateResult());
    }

    public ValidateResult validateProperty(T domain, String property, Class<?>... groups) {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();
        return convert(validator.validateProperty(domain, property, groups), new ValidateResult());
    }

    private ValidateResult convert(Set<ConstraintViolation<Object>> vr, ValidateResult r) {
        vr.forEach((cv) -> r.addErrorMessage(cv.getMessage()));
        return r;
    }

}
