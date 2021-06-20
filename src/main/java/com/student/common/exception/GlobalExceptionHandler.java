package com.student.common.exception;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.student.common.result.ResultDO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * 全局异常拦截
 *
 * @author 蘑菇~
 *         <p>
 *         2016年9月15日下午7:19:49
 */
@ControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);


    public static final String DEFAULT_ERROR_VIEW = "admin/common/error";

    @ExceptionHandler({RuntimeException.class, Exception.class})
    public Object operateExp(Exception ex, HttpServletResponse response, HandlerMethod mathod) {

        logger.error(ex.getMessage());

        ResponseBody body = mathod.getMethodAnnotation(ResponseBody.class);
        // 判断有没有@ResponseBody的注解没有的话调用父方法
        String errorMsg = (ex instanceof BaseException) ? ex.getLocalizedMessage() : "未知异常";
        int code = (ex instanceof BaseException) ? (((BaseException) ex).getCode()) : -1;
        if (body == null) {
            ModelAndView modelAndView = new ModelAndView();
            modelAndView.addObject("errorMsg", errorMsg);
            modelAndView.setViewName(DEFAULT_ERROR_VIEW);
            return modelAndView;
        }

        ResultDO resultDO = new ResultDO();
        resultDO.setCode(code);
        resultDO.setMessage(errorMsg);

        try {
            response.setContentType("application/json;charset=utf-8");
            java.io.PrintWriter out = response.getWriter();
            out.write(JSON.toJSONString(resultDO));
            out.println();
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

}