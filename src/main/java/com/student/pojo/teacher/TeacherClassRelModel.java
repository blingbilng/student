package com.student.pojo.teacher;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

public class TeacherClassRelModel extends BasicModel {
    @JSONField(name = "teacher_class_rel_uid")
    private String teacherClassRelUid;
    @JSONField(name = "teacher_uid")
    private String teacherUid;
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "teacher_name")
    private String teacherName;
    @JSONField(name = "class_name")
    private String className;

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getTeacherClassRelUid() {
        return teacherClassRelUid;
    }

    public void setTeacherClassRelUid(String teacherClassRelUid) {
        this.teacherClassRelUid = teacherClassRelUid;
    }

    public String getTeacherUid() {
        return teacherUid;
    }

    public void setTeacherUid(String teacherUid) {
        this.teacherUid = teacherUid;
    }

    public String getClassUid() {
        return classUid;
    }

    public void setClassUid(String classUid) {
        this.classUid = classUid;
    }
}
