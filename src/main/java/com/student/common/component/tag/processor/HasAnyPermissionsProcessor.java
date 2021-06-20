package com.student.common.component.tag.processor;

import com.student.common.Constants;
import com.student.common.ThreadVariable;
import com.student.pojo.user.EducateSession;
import com.student.pojo.user.UserInfoModel;

import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.thymeleaf.context.ITemplateContext;
import org.thymeleaf.engine.AttributeName;
import org.thymeleaf.model.IModel;
import org.thymeleaf.processor.element.AbstractAttributeModelProcessor;
import org.thymeleaf.processor.element.IElementModelStructureHandler;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.util.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

import static com.student.common.ThreadVariable.getSession;

/**
 * <pre>
 * 使用规则：<button power:any="addRole"  id="add" type="button" >新增</button>
 * </pre>
 * <p>
 * 多个用逗号分隔
 *
 * @author 蘑菇~
 *         <p>
 *         2016年9月17日下午5:02:06
 */
public class HasAnyPermissionsProcessor extends AbstractAttributeModelProcessor {

    private static final String ATTR_NAME = "any";
    private static final int PRECEDENCE = 100;

    public HasAnyPermissionsProcessor(final String dialectPrefix) {

        super(TemplateMode.HTML, // This processor will apply only to HTML mode
                dialectPrefix, // Prefix to be applied to name for matching
                null, // No tag name: match any tag name
                false, // No prefix to be applied to tag name
                ATTR_NAME, // Name of the attribute that will be matched
                true, // Apply dialect prefix to attribute name
                PRECEDENCE, // Precedence (inside dialect's own precedence)
                true); // Remove the matched attribute afterwards
    }

    protected void doProcess(final ITemplateContext context, final IModel model, final AttributeName attributeName,
                             final String attributeValue, final IElementModelStructureHandler structureHandler) {

        if (StringUtils.isEmpty(attributeValue)) {
            throw new RuntimeException("请检查页面内的自定义标签");
        }

        EducateSession session = getSession();
        if (session == null || session.getUserUid() == null) {
            model.reset();
        }

        UserInfoModel user = ThreadVariable.getUser();

        if (Objects.isNull(user)) {
            model.reset();
        }
        if (!hasAny(attributeValue)) {
            model.reset();
        }
    }

    private boolean hasAny(String attributeValue) {
        String[] eNames = attributeValue.split(",");
        if (eNames == null || eNames.length == 0) {
            throw new RuntimeException("请检查页面内的自定义标签");
        }

        RequestAttributes ra = RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = ((ServletRequestAttributes) ra).getRequest();
        @SuppressWarnings("unchecked")
        List<String> names = (List<String>) request.getSession().getAttribute(Constants.PERMISSION_NAME);

        Set<String> roleEname = new HashSet<>(Arrays.asList(eNames));

        boolean power = false;
        for (String ename : roleEname) {
            if (names.contains(ename)) {
                power = true;
                break;
            }
        }

        return power;
    }

}