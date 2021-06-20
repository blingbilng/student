package com.student.pojo.teacher;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasePageRequest;

public class TeacherRequestDTO extends BasePageRequest {
    @JSONField(name = "teacher_name")
    private String teacherName;
    @JSONField(name = "class_name")
    private String className;
    @JSONField(name = "teacher_phone")
    private String teacherPhone;
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "teacher_uid")
    private String teacherUid;

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

    public String getTeacherPhone() {
        return teacherPhone;
    }

    public void setTeacherPhone(String teacherPhone) {
        this.teacherPhone = teacherPhone;
    }
}
