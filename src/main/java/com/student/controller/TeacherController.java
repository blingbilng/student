package com.student.controller;

import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;

import com.student.pojo.teacher.TeacherClassRelModel;
import com.student.pojo.teacher.TeacherModel;
import com.student.pojo.teacher.TeacherRequestDTO;
import com.student.service.teacher.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/teacherindex.html")
    public String teacherIndex() {
        return "admin/basicData/teacher/teacherList";
    }

    @GetMapping("/teacherClassIndex.html")
    public String teacherClassIndex() {
        return "admin/basicData/teacher/teacherClassList";
    }

    @RequestMapping(value = "/createTeacher", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createTeacher(@RequestBody String payload) {
        TeacherModel TeacherModel = FastJsonUtil.toBean(payload, TeacherModel.class);
        int total = teacherService.createTeacher(TeacherModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入教师信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/pageTeacher", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageTeacher(TeacherRequestDTO requestDTO) {
        GridPage<TeacherModel> page = teacherService.pageTeacher(requestDTO);
        return new LayGridPage<TeacherModel>(page);
    }

    @RequestMapping(value = "/pageTeacherClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageTeacherClass(TeacherRequestDTO requestDTO) {
        GridPage<TeacherClassRelModel> page = teacherService.pageTeacherClass(requestDTO);
        return new LayGridPage<TeacherClassRelModel>(page);
    }

    @RequestMapping(value = "/deleteTeacher", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteTeacher(@RequestBody String payload) {
        String TeacherUid = FastJsonUtil.findStringValue(payload, "teacher_uid");
        int total = teacherService.deleteTeacher(TeacherUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除教师信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    //删除教师班级关系
    @RequestMapping(value = "/deleteTeacherClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteTeacherClass(@RequestBody String payload) {
        String teacherClassRelUid = FastJsonUtil.findStringValue(payload, "teacher_class_rel_uid");
        int total = teacherService.deleteTeacherClass(teacherClassRelUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除教师关联信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/updateTeacher", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateTeacher(@RequestBody String payload) {
        TeacherModel TeacherModel = FastJsonUtil.toBean(payload, TeacherModel.class);
        int total = teacherService.updateTeacher(TeacherModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改教师信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/getTeacher", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object getTeacher(@RequestBody String payload) {
        String TeacherUid = FastJsonUtil.findStringValue(payload, "teacher_uid");
        TeacherModel teacherModel = teacherService.getTeacher(TeacherUid);
        return ResultBuilderUtil.buildSuccess(teacherModel);
    }
}
