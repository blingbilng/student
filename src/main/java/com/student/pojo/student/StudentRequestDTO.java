package com.student.pojo.student;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasePageRequest;

public class StudentRequestDTO extends BasePageRequest {
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "student_name")
    private String studentName;
    @JSONField(name = "student_no")
    private String studentNo;
    @JSONField(name = "student_sex")
    private String studentSex;

    public String getClassUid() {
        return classUid;
    }

    public void setClassUid(String classUid) {
        this.classUid = classUid;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentNo() {
        return studentNo;
    }

    public void setStudentNo(String studentNo) {
        this.studentNo = studentNo;
    }

    public String getStudentSex() {
        return studentSex;
    }

    public void setStudentSex(String studentSex) {
        this.studentSex = studentSex;
    }
}
