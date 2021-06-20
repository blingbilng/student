package com.student.pojo.classs;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

public class ClassModel extends BasicModel {
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "class_number")
    private int classNumber;
    @JSONField(name = "class_name")
    private String className;
    @JSONField(name = "class_teacher_uid")
    private String classTeacherUid;
    @JSONField(name = "class_teacher_name")
    private String classTeacherName;


    public String getClassTeacherName() {
        return classTeacherName;
    }

    public void setClassTeacherName(String classTeacherName) {
        this.classTeacherName = classTeacherName;
    }

    public String getClassUid() {
        return classUid;
    }

    public void setClassUid(String classUid) {
        this.classUid = classUid;
    }

    public int getClassNumber() {
        return classNumber;
    }

    public void setClassNumber(int classNumber) {
        this.classNumber = classNumber;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getClassTeacherUid() {
        return classTeacherUid;
    }

    public void setClassTeacherUid(String classTeacherUid) {
        this.classTeacherUid = classTeacherUid;
    }
}
