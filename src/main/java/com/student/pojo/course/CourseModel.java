package com.student.pojo.course;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

/**
 * @author ll
 * @date 2018/4/16 14:47
 */
public class CourseModel extends BasicModel {
    @JSONField(name = "course_uid")
    private String courseUid;
    @JSONField(name = "course_name")
    private String courseName;

    public String getCourseUid() {
        return courseUid;
    }

    public void setCourseUid(String courseUid) {
        this.courseUid = courseUid;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }
}
