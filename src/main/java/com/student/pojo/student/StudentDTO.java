package com.student.pojo.student;

import com.alibaba.fastjson.annotation.JSONField;

public class StudentDTO extends StudentModel {
    @JSONField(name = "class_name")
    private String className;
    @JSONField(name = "class_student_name")
    private String classStudentName;

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getClassStudentName() {
        return classStudentName;
    }

    public void setClassStudentName(String classStudentName) {
        this.classStudentName = classStudentName;
    }
}
