package com.student.service.classs.impl;

import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.ClassMapper;
import com.student.pojo.classs.ClassModel;
import com.student.pojo.classs.ClassRequestDTO;
import com.student.service.classs.ClassService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClassServiceImpl implements ClassService {
    private static final Logger logger = LoggerFactory.getLogger(ClassServiceImpl.class);

    @Autowired
    private ClassMapper classMapper;

    @Override
    public int createTeacherClassRel(String teacherUid, String classUid) {
        int total = classMapper.createTeacherClassRel(classUid, teacherUid);
        if (0 == total) {
            logger.info("Error createTeacherClassRel teacherUid：{},classUid:{}", teacherUid, classUid);
        }
        return total;
    }

    @Override
    public GridPage<ClassModel> pageClass(ClassRequestDTO requestDTO) {
        logger.info("pageClass:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = classMapper.countClass(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<ClassModel> rows = classMapper.listClass(requestDTO);
        return new GridPage<>(rows, total);
    }

    @Override
    public int deleteClass(String classUid) {
        int total = classMapper.deleteClass(classUid);
        if (0 == total) {
            logger.info("Error deleteClass：{}", classUid);
            return total;
        } else {
            classMapper.deleteTeacherClassRel(classUid);
            return total;
        }
    }

    @Override
    public int updateClass(ClassModel classModel) {
        int total = classMapper.updateClass(classModel);
        if (0 == total) {
            logger.info("Error updateClass：{}", FastJsonUtil.toJSONString(classModel));
        } else {
            classMapper.deleteTeacherClassRel(classModel.getClassUid());
            classMapper.createTeacherClassRel(classModel.getClassUid(), classModel.getClassTeacherUid());
        }
        return total;
    }

    @Override
    public int createClass(ClassModel classModel) {
        int total = classMapper.createClass(classModel);
        if (0 == total) {
            logger.info("Error createClass：{}", FastJsonUtil.toJSONString(classModel));
            return total;
        } else {
            classMapper.createTeacherClassRel(classModel.getClassUid(), classModel.getClassTeacherUid());
            return total;
        }
    }

    @Override
    public ClassModel getClass(String classUid) {
        return classMapper.getClass(classUid);
    }
}
