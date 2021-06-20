package com.student.mapper;

import com.student.pojo.teacher.TeacherClassRelModel;
import com.student.pojo.teacher.TeacherModel;
import com.student.pojo.teacher.TeacherRequestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TeacherMapper {
    int createTeacher(TeacherModel teacherModel);

    List<TeacherModel> listTeacher(TeacherRequestDTO requestDTO);

    int countTeacher(TeacherRequestDTO requestDTO);

    List<TeacherClassRelModel> listTeacherClass(TeacherRequestDTO requestDTO);

    int countTeacherClass(TeacherRequestDTO requestDTO);

    int updateTeacher(TeacherModel teacherModel);

    int deleteTeacher(@Param("teacherUid") String teacherUid);

    int deleteTeacherClass(@Param("teacherClassRelUid") String teacherClassRelUid);

    TeacherModel getTeacher(@Param("teacher_uid") String teacherUid);

}
