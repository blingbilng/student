package com.student.common;

import com.student.common.utils.SpringBeanUtil;
import com.student.service.user.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * 使用注解标注过滤器
 * <br/>
 *
 * @WebFilter将一个实现了javax.servlet.Filter接口的类定义为过滤器 <br/>
 * 属性filterName声明过滤器的名称,可选属性urlPatterns指定要过滤的URL模式,也可使用属性value来声明.<br/>
 * (指定要过滤的URL模式是必选属性)<br/>
 * @create 2016年1月6日
 */
@Component
@WebFilter(filterName = "loginSessionFilter", urlPatterns = "/*")
public class LoginSessionFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(LoginSessionFilter.class);

    private LoginService loginService;

    public final static List<String> IS_NOT_LOGIN_VALIDATE_PATH = new ArrayList<String>();

    static {
    }


    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
            throws IOException, ServletException {
        logger.info("!11");
        initService();
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String uri = request.getRequestURI();

        if (isEndWith(uri) || isNotLoginValidateResultTypes(uri) || isNotLoginValidate(uri)) {
            chain.doFilter(request, response);
            ThreadVariable.clearThreadVariable();
            return;
        }

        Boolean islogin = loginService.isLogin(request, response);
        // 已登录
        if (islogin) {
            chain.doFilter(request, response);
            ThreadVariable.clearThreadVariable();
            return;
        } else {// 未登录------->返回登录页
            response.setContentType("text/html");
            response.getWriter().print("<script>document.location.href='/login.html'</script>");
            ThreadVariable.clearThreadVariable();
            return;
        }

    }

    private boolean isEndWith(String url) {
        if (url.endsWith(".jpg")
                || url.endsWith(".gif") || url.endsWith(".css") || url.endsWith(".js")
                || url.endsWith(".png") || url.endsWith(".bmp") || url.endsWith(".ico")
                || url.endsWith(".txt")
                || url.endsWith(".mp3")) {
            return true;
        }
        return false;
    }

    /**
     * 白名单过滤
     *
     * @param uri
     * @return
     */
    private boolean isNotLoginValidate(String uri) {
        if (uri.equals("/")
                || uri.equals("/login.html")
                || uri.startsWith("/adminLogin/doLogin")
                || uri.startsWith("/syntheticalSearch/")
                || uri.startsWith("/basicData/fileManager/fileList.html")
                || uri.startsWith("/basicData/fileManager/pageQiuFile")
                || uri.startsWith("/file/upload")
                || uri.startsWith("/basicData/fileManager/delFile/")
                ) {
            return true;
        }
        // 白名单
        for (String path : IS_NOT_LOGIN_VALIDATE_PATH) {
            if (uri.equals(path)) {
                return true;
            }
        }
        return false;
    }

    private boolean isNotLoginValidateResultTypes(String url) {
        if (url.endsWith("/doLogin") || (url.endsWith("/login.html") && !url.endsWith("/index.html"))) {
            return true;
        }
        return false;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {

    }

    private void initService() {
        if (loginService == null) {
            loginService = (LoginService) SpringBeanUtil.getBeanFromSpringByBeanName("loginService");
        }
    }

}
