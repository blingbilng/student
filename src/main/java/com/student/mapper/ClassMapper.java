package com.student.mapper;

import com.student.pojo.classs.ClassModel;
import com.student.pojo.classs.ClassRequestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ClassMapper {
    int createClass(ClassModel classModel);

    List<ClassModel> listClass(ClassRequestDTO requestDTO);

    int countClass(ClassRequestDTO requestDTO);

    int deleteClass(@Param("classUid") String classUid);

    int updateClass(ClassModel classModel);

    int createTeacherClassRel(@Param("classUid") String classUid, @Param("teacherUid") String teacherUid);

    ClassModel getClass(@Param("classUid") String classUid);

    int deleteTeacherClassRel(@Param("classUid") String classUid);

}
