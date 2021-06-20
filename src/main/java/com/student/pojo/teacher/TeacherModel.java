package com.student.pojo.teacher;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

public class TeacherModel extends BasicModel {
    @JSONField(name = "teacher_uid")
    private String teacherUid;
    @JSONField(name = "teacher_no")
    private String teacherNo;
    @JSONField(name = "teacher_name")
    private String teacherName;
    @JSONField(name = "teacher_phone")
    private String teacherPhone;
    @JSONField(name = "class_name")
    private String calssName;
    private String email;



    public String getTeacherNo() {
        return teacherNo;
    }

    public void setTeacherNo(String teacherNo) {
        this.teacherNo = teacherNo;
    }

    public String getCalssName() {
        return calssName;
    }

    public void setCalssName(String calssName) {
        this.calssName = calssName;
    }

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

    public String getTeacherPhone() {
        return teacherPhone;
    }

    public void setTeacherPhone(String teacherPhone) {
        this.teacherPhone = teacherPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
