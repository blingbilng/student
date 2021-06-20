package com.student.mapper;

import com.student.pojo.course.CourseModel;
import com.student.pojo.course.CourseRequestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/16 14:54
 */
@Mapper
public interface CourseMapper {
    int createCourse(CourseModel courseModel);

    List<CourseModel> listCourse(CourseRequestDTO requestDTO);

    int countCourse(CourseRequestDTO requestDTO);

    int updateCourse(CourseModel courseModel);

    int deleteCourse(@Param("courseUid") String courseUid);
}
