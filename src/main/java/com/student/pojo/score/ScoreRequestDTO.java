package com.student.pojo.score;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasePageRequest;

/**
 * @author ll
 * @date 2018/4/16 15:58
 */
public class ScoreRequestDTO extends BasePageRequest {
    @JSONField(name = "teacher_uid")
    private String teacherUid;
    @JSONField(name = "course_uid")
    private String courseUid;
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "student_uid")
    private String studentUid;
    @JSONField(name = "term_uid")
    private String termUid;

    public String getTermUid() {
        return termUid;
    }

    public void setTermUid(String termUid) {
        this.termUid = termUid;
    }

    public String getCourseUid() {
        return courseUid;
    }

    public void setCourseUid(String courseUid) {
        this.courseUid = courseUid;
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

    public String getStudentUid() {
        return studentUid;
    }

    public void setStudentUid(String studentUid) {
        this.studentUid = studentUid;
    }
}
