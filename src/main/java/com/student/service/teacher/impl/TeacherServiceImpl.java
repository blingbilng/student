package com.student.service.teacher.impl;

import com.student.common.base.UserTypeEnum;
import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.TeacherMapper;
import com.student.mapper.UserInfoMapper;
import com.student.pojo.teacher.TeacherClassRelModel;
import com.student.pojo.teacher.TeacherModel;
import com.student.pojo.teacher.TeacherRequestDTO;
import com.student.pojo.user.UserInfoModel;
import com.student.service.teacher.TeacherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    private static final Logger logger = LoggerFactory.getLogger(TeacherServiceImpl.class);
    @Autowired
    private TeacherMapper teacherMapper;

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Override
    public int createTeacher(TeacherModel teacherModel) {
        int total = teacherMapper.createTeacher(teacherModel);
        createUserInfo(teacherModel);
        if (0 == total) {
            logger.info("Error createTeacher：{}", FastJsonUtil.toJSONString(teacherModel));
        }
        return total;
    }

    //创建教师权限用户
    private void createUserInfo(TeacherModel studentModel) {
        UserInfoModel userInfoModel = new UserInfoModel();
        userInfoModel.setUserUid(studentModel.getTeacherUid());
        userInfoModel.setUserName(studentModel.getTeacherName());
        userInfoModel.setUserPhone(studentModel.getTeacherPhone());
        userInfoModel.setLoginName(studentModel.getTeacherNo());
        userInfoModel.setPassword("123456");
        userInfoModel.setUserType(UserTypeEnum.TYP_TEACHER.name());
        userInfoModel.setCreatedBy(studentModel.getUserUid());
        userInfoMapper.createUserInfo(userInfoModel);
    }

    @Override
    public GridPage<TeacherModel> pageTeacher(TeacherRequestDTO requestDTO) {
        logger.info("pageTeacher:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = teacherMapper.countTeacher(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<TeacherModel> rows = teacherMapper.listTeacher(requestDTO);
        return new GridPage<>(rows, total);
    }

    @Override
    public GridPage<TeacherClassRelModel> pageTeacherClass(TeacherRequestDTO requestDTO) {
        logger.info("pageTeacher:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = teacherMapper.countTeacherClass(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<TeacherClassRelModel> rows = teacherMapper.listTeacherClass(requestDTO);
        return new GridPage<>(rows, total);
    }

    @Override
    public int deleteTeacher(String teacherUid) {
        int total = teacherMapper.deleteTeacher(teacherUid);
        if (0 == total) {
            logger.info("Error deleteTeacher：{}", teacherUid);
        }
        return total;
    }

    @Override
    public int deleteTeacherClass(String teacherClassRelUid) {
        return teacherMapper.deleteTeacherClass(teacherClassRelUid);
    }

    @Override
    public int updateTeacher(TeacherModel teacherModel) {
        int total = teacherMapper.updateTeacher(teacherModel);
        if (0 == total) {
            logger.info("Error updateTeacher：{}", FastJsonUtil.toJSONString(teacherModel));
        }
        return total;
    }

    @Override
    public TeacherModel getTeacher(String teacherUid) {
        TeacherModel teacherModel = teacherMapper.getTeacher(teacherUid);
        return teacherModel;
    }

}
