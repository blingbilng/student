package com.student.mapper;

import com.student.pojo.student.StudentDTO;
import com.student.pojo.student.StudentModel;
import com.student.pojo.student.StudentRequestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface StudentMapper {
    int createStudent(StudentModel studentModel);

    List<StudentDTO> listStudent(StudentRequestDTO requestDTO);

    int countStudent(StudentRequestDTO requestDTO);

    int deleteStudent(@Param("studentUid") String studentUid);

    StudentDTO getStudent(@Param("studentUid") String studentUid);

    int updateStudent(StudentModel studentModel);

}
