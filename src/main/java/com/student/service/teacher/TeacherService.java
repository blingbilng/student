package com.student.service.teacher;

import com.student.common.result.GridPage;
import com.student.pojo.teacher.TeacherClassRelModel;
import com.student.pojo.teacher.TeacherModel;
import com.student.pojo.teacher.TeacherRequestDTO;

public interface TeacherService {
    int createTeacher(TeacherModel teacherModel);

    GridPage<TeacherModel> pageTeacher(TeacherRequestDTO requestDTO);

    GridPage<TeacherClassRelModel> pageTeacherClass(TeacherRequestDTO requestDTO);

    int deleteTeacher(String teacherUid);

    int deleteTeacherClass(String teacherClassRelUid);

    int updateTeacher(TeacherModel teacherModel);

    TeacherModel getTeacher(String teacherUid);

}
