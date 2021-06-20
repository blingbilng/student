package com.student.pojo.classs;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasePageRequest;

public class ClassRequestDTO extends BasePageRequest {
    @JSONField(name = "teacher_name")
    private String teacherName;
    @JSONField(name = "class_name")
    private String className;
    @JSONField(name = "teacher_uid")
    private String teacherUid;

    public String getTeacherUid() {
        return teacherUid;
    }

    public void setTeacherUid(String teacherUid) {
        this.teacherUid = teacherUid;
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
}
