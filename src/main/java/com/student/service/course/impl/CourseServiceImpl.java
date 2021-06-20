package com.student.service.course.impl;

import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.CourseMapper;
import com.student.pojo.course.CourseModel;
import com.student.pojo.course.CourseRequestDTO;
import com.student.service.course.CourseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/16 14:49
 */
@Service
public class CourseServiceImpl implements CourseService {
    private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);
    @Autowired
    private CourseMapper courseMapper;


    @Override
    public int createCourse(CourseModel courseModel) {
        int total = courseMapper.createCourse(courseModel);
        if (0 == total) {
            logger.info("Error createCourse：{}", FastJsonUtil.toJSONString(courseModel));
        }
        return total;
    }

    @Override
    public GridPage<CourseModel> pageCourse(CourseRequestDTO requestDTO) {
        logger.info("pageCourse:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = courseMapper.countCourse(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<CourseModel> rows = courseMapper.listCourse(requestDTO);
        return new GridPage<>(rows, total);
    }


    @Override
    public int updateCourse(CourseModel courseModel) {
        int total = courseMapper.updateCourse(courseModel);
        if (0 == total) {
            logger.info("Error updateCourse：{}", FastJsonUtil.toJSONString(courseModel));
        }
        return total;
    }

    @Override
    public int deleteCourse(String courseUid) {
        int total = courseMapper.deleteCourse(courseUid);
        if (0 == total) {
            logger.info("Error deleteCourse：{}", courseUid);
        }
        return total;
    }
}
