package com.student.service.student;

import com.student.common.result.GridPage;
import com.student.pojo.student.StudentDTO;
import com.student.pojo.student.StudentModel;
import com.student.pojo.student.StudentRequestDTO;

public interface StudentService {
    GridPage<StudentDTO> pageStudent(StudentRequestDTO requestDTO);

    int createStudent(StudentModel studentModel);

    int updateStudent(StudentModel studentModel);

    int deleteStudent(String studentUid);

    StudentDTO getStudent(String studentUid);


}
