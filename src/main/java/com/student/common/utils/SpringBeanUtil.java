package com.student.common.utils;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component("springBeanUtil")
public class SpringBeanUtil implements ApplicationContextAware {

    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        SpringBeanUtil.applicationContext = applicationContext;
    }

    /**
     * 通过名称在spring容器中获取对象
     *
     * @param beanName beanName
     * @return Bean Object
     */
    public static Object getBeanFromSpringByBeanName(String beanName) {
        return applicationContext.getBean(beanName);
    }

    @SuppressWarnings("unchecked")
    public static <T> T getBean(String beanName, Class<?> clazz) {
        return (T) applicationContext.getBean(beanName, clazz);
    }

}
