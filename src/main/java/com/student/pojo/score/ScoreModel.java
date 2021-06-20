package com.student.pojo.score;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

import java.math.BigDecimal;

/**
 * @author ll
 * @date 2018/4/16 15:55
 */
public class ScoreModel extends BasicModel {
    @JSONField(name = "score_uid")
    private String scoreUid;
    @JSONField(name = "student_uid")
    private String studentUid;
    @JSONField(name = "course_uid")
    private String courseUid;
    @JSONField(name = "term_uid")
    private String termUid;
    @JSONField(name = "class_uid")
    private String classUid;
    @JSONField(name = "student_name")
    private String studentName;
    @JSONField(name = "term_name")
    private String termName;
    @JSONField(name = "course_name")
    private String courseName;
    private Integer score;
    @JSONField(name = "class_rank")
    private Integer classRank;
    @JSONField(name = "total_score")
    private Integer totalScore;
    @JSONField(name = "average_score")
    private BigDecimal averageScore;
    @JSONField(name = "class_name")
    private String className;

    public BigDecimal getAverageScore() {
        return averageScore;
    }

    public void setAverageScore(BigDecimal averageScore) {
        this.averageScore = averageScore;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getTermName() {
        return termName;
    }

    public void setTermName(String termName) {
        this.termName = termName;
    }

    public String getTermUid() {
        return termUid;
    }

    public void setTermUid(String termUid) {
        this.termUid = termUid;
    }

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

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public Integer getClassRank() {
        return classRank;
    }

    public void setClassRank(Integer classRank) {
        this.classRank = classRank;
    }

    public Integer getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(Integer totalScore) {
        this.totalScore = totalScore;
    }

    public String getScoreUid() {
        return scoreUid;
    }

    public void setScoreUid(String scoreUid) {
        this.scoreUid = scoreUid;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getStudentUid() {
        return studentUid;
    }

    public void setStudentUid(String studentUid) {
        this.studentUid = studentUid;
    }

    public String getCourseUid() {
        return courseUid;
    }

    public void setCourseUid(String courseUid) {
        this.courseUid = courseUid;
    }
}
