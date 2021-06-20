package com.student.controller;

import com.student.common.base.BaseController;
import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.student.StudentDTO;
import com.student.pojo.student.StudentModel;
import com.student.pojo.student.StudentRequestDTO;
import com.student.pojo.teacher.TeacherModel;
import com.student.service.student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class StudentController extends BaseController {
    @Autowired
    private StudentService studentService;

    /**
     * 路由配置
     *
     * @return
     */
    @GetMapping("/pageStudent.html")
    public String studentIndex() {
        return "admin/basicData/student/studentList";
    }

    /**
     * 创建学生创建学生用户
     *
     * @param payload
     * @return
     */
    @RequestMapping(value = "/createStudent", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createStudent(@RequestBody String payload) {
        StudentModel studentModel = FastJsonUtil.toBean(payload, StudentModel.class);
        int total = studentService.createStudent(studentModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    /**
     * 分页查询
     *
     * @param requestDTO
     * @return
     */
    @RequestMapping(value = "/pageStudent", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageStudent(StudentRequestDTO requestDTO) {
        GridPage<StudentDTO> page = studentService.pageStudent(requestDTO);
        return new LayGridPage<TeacherModel>(page);
    }

    /**
     * 分页查询
     *
     * @param requestDTO
     * @return
     */
    @RequestMapping(value = "/pageStudentTwo", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageStudentTwo(@RequestBody String payload) {
        StudentRequestDTO requestDTO = new StudentRequestDTO();
        requestDTO.setClassUid(FastJsonUtil.findStringValue(payload, "class_uid"));
        GridPage<StudentDTO> page = studentService.pageStudent(requestDTO);
        return new LayGridPage<TeacherModel>(page);
    }

    /**
     * 删除
     *
     * @param payload
     * @return
     */
    @RequestMapping(value = "/deleteStudent", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteStudent(@RequestBody String payload) {
        String studentUid = FastJsonUtil.findStringValue(payload, "student_uid");
        int total = studentService.deleteStudent(studentUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    /**
     * 未用到
     *
     * @param payload
     * @return
     */
    @RequestMapping(value = "/getStudent", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object getStudent(@RequestBody String payload) {
        String studentUid = FastJsonUtil.findStringValue(payload, "student_uid");
        StudentDTO student = studentService.getStudent(studentUid);
        return ResultBuilderUtil.buildSuccess(student);
    }

    /**
     * 修改
     *
     * @param payload
     * @return
     */
    @RequestMapping(value = "/updateStudent", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateStudent(@RequestBody String payload) {
        StudentModel studentModel = FastJsonUtil.toBean(payload, StudentModel.class);
        int total = studentService.updateStudent(studentModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

}
