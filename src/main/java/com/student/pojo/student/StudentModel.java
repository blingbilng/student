package com.student.pojo.student;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

public class StudentModel extends BasicModel {
    @JSONField(name = "student_uid")
    private String studentUid;
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "student_no")
    private String studentNo;
    @JSONField(name = "student_name")
    private String studentName;
    @JSONField(name = "student_phone")
    private String studentPhone;
    @JSONField(name = "student_sex")
    private String studentSex;
    @JSONField(name = "student_email")
    private String studentEmail;

    public String getStudentUid() {
        return studentUid;
    }

    public void setStudentUid(String studentUid) {
        this.studentUid = studentUid;
    }

    public String getClassUid() {
        return classUid;
    }

    public void setClassUid(String classUid) {
        this.classUid = classUid;
    }

    public String getStudentNo() {
        return studentNo;
    }

    public void setStudentNo(String studentNo) {
        this.studentNo = studentNo;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentPhone() {
        return studentPhone;
    }

    public void setStudentPhone(String studentPhone) {
        this.studentPhone = studentPhone;
    }

    public String getStudentSex() {
        return studentSex;
    }

    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }
}
