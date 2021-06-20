package com.student.service.student.impl;

import com.student.common.base.UserTypeEnum;
import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.StudentMapper;
import com.student.mapper.UserInfoMapper;
import com.student.pojo.student.StudentDTO;
import com.student.pojo.student.StudentModel;
import com.student.pojo.student.StudentRequestDTO;
import com.student.pojo.user.UserInfoModel;
import com.student.service.student.StudentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {
    private static final Logger logger = LoggerFactory.getLogger(StudentServiceImpl.class);

    @Autowired
    private StudentMapper studentMapper;

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Override
    public GridPage<StudentDTO> pageStudent(StudentRequestDTO requestDTO) {
        logger.info("pageStudent:{}", FastJsonUtil.toJSONString(requestDTO));
        int total = studentMapper.countStudent(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<StudentDTO> rows = studentMapper.listStudent(requestDTO);
        return new GridPage<>(rows, total);
    }

    //创建学生信息
    @Override
    public int createStudent(StudentModel studentModel) {
        int total = studentMapper.createStudent(studentModel);
        createUserInfo(studentModel);
        if (0 == total) {
            logger.info("Error createStudent：{}", FastJsonUtil.toJSONString(studentModel));
        }
        return total;
    }
    //创建拥有学生权限的用户
    private void createUserInfo(StudentModel studentModel) {
        UserInfoModel userInfoModel = new UserInfoModel();
        userInfoModel.setUserUid(studentModel.getStudentUid());
        userInfoModel.setUserName(studentModel.getStudentName());
        userInfoModel.setUserPhone(studentModel.getStudentPhone());
        userInfoModel.setLoginName(studentModel.getStudentNo());
        userInfoModel.setPassword("123456");
        userInfoModel.setUserType(UserTypeEnum.TYP_STUDENT.name());
        userInfoModel.setCreatedBy(studentModel.getUserUid());
        userInfoMapper.createUserInfo(userInfoModel);
    }

    @Override
    public int updateStudent(StudentModel studentModel) {
        int total = studentMapper.updateStudent(studentModel);
        if (0 == total) {
            logger.info("Error updateStudent：{}", FastJsonUtil.toJSONString(studentModel));
        }
        return total;
    }

    @Override
    public int deleteStudent(String studentUid) {
        int total = studentMapper.deleteStudent(studentUid);
        if (0 == total) {
            logger.info("Error deleteStudent：{}", studentUid);
        }
        return total;
    }

    @Override
    public StudentDTO getStudent(String studentUid) {
        return studentMapper.getStudent(studentUid);
    }
}
