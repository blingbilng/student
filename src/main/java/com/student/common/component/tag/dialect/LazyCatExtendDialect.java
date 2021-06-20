package com.student.common.component.tag.dialect;

import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Component;
import org.thymeleaf.dialect.AbstractProcessorDialect;
import org.thymeleaf.processor.IProcessor;
import org.thymeleaf.standard.StandardDialect;

import com.student.common.component.tag.processor.HasAnyPermissionsProcessor;

@Component
public class LazyCatExtendDialect extends AbstractProcessorDialect {

    private static final String DIALECT_NAME = "extend lazyCat Dialect";
    private static final String prefix = "power";//权限的自定义方言的前缀

    public LazyCatExtendDialect() {
        super(DIALECT_NAME, prefix, StandardDialect.PROCESSOR_PRECEDENCE);
    }

    @Override
    public Set<IProcessor> getProcessors(final String dialectPrefix) {
        final Set<IProcessor> processors = new HashSet<IProcessor>();
        processors.add(new HasAnyPermissionsProcessor(dialectPrefix));
        return processors;
    }

}