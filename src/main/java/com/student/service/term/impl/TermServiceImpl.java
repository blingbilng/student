package com.student.service.term.impl;

import com.student.common.base.BasePageRequest;
import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.TermMapper;
import com.student.pojo.course.CourseModel;
import com.student.pojo.term.TermModel;
import com.student.service.course.impl.CourseServiceImpl;
import com.student.service.term.TermService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TermServiceImpl implements TermService{
    private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);
    @Autowired
    private TermMapper termMapper;

    @Override
    public int createTerm(TermModel TermModel) {
        int total = termMapper.createTerm(TermModel);
        if (0 == total) {
            logger.info("Error createTerm：{}", FastJsonUtil.toJSONString(TermModel));
        }
        return total;    }

    @Override
    public GridPage<TermModel> pageTerm(BasePageRequest requestDTO) {
        logger.info("pageTerm:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = termMapper.countTerm(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<TermModel> rows = termMapper.listTerm(requestDTO);
        return new GridPage<>(rows, total);
    }

    @Override
    public int updateTerm(TermModel TermModel) {
        int total = termMapper.updateTerm(TermModel);
        if (0 == total) {
            logger.info("Error updateTerm：{}", FastJsonUtil.toJSONString(TermModel));
        }
        return total;
    }

    @Override
    public int deleteTerm(String TermUid) {
        int total = termMapper.deleteTerm(TermUid);
        if (0 == total) {
            logger.info("Error deleteTerm：{}", TermUid);
        }
        return total;
    }
}
