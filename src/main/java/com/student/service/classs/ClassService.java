package com.student.service.classs;

import com.student.common.result.GridPage;
import com.student.pojo.classs.ClassModel;
import com.student.pojo.classs.ClassRequestDTO;

public interface ClassService {
    int createTeacherClassRel(String teacherUid, String classUid);

    GridPage<ClassModel> pageClass(ClassRequestDTO requestDTO);

    int deleteClass(String classUid);

    int updateClass(ClassModel classModel);

    int createClass(ClassModel classModel);

    ClassModel getClass(String classUid);
}
