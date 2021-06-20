package com.student.service.course;

import com.student.common.result.GridPage;
import com.student.pojo.course.CourseModel;
import com.student.pojo.course.CourseRequestDTO;

/**
 * @author ll
 * @date 2018/4/16 14:49
 */
public interface CourseService {
    int createCourse(CourseModel courseModel);

    GridPage<CourseModel> pageCourse(CourseRequestDTO requestDTO);

    int updateCourse(CourseModel courseModel);

    int deleteCourse(String courseUid);

}
