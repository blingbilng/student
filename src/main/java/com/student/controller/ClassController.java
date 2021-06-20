package com.student.controller;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.classs.ClassModel;
import com.student.pojo.classs.ClassRequestDTO;
import com.student.pojo.teacher.TeacherModel;
import com.student.service.classs.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Method;

@Controller
public class ClassController {
    @Autowired
    private ClassService classService;

    @GetMapping("/classIndex.html")
    public String classIndex() {
        return "admin/basicData/classs/classList";
    }

    @RequestMapping(value = "/createClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createClass(@RequestBody String payload) {
        ClassModel ClassModel = FastJsonUtil.toBean(payload, ClassModel.class);
        int total = classService.createClass(ClassModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入班级信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/createTeacherClassRel", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createTeacherClassRel(@RequestBody String payload) {
        JSONObject requestParam = JSON.parseObject(payload);
        String classUid = requestParam.getString("class_uid");
        String teacherUid = requestParam.getString("teacher_uid");
        int total = classService.createTeacherClassRel(teacherUid, classUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入班级教师关联信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/pageClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageClass(ClassRequestDTO requestDTO) {
        GridPage<ClassModel> page = classService.pageClass(requestDTO);
        return new LayGridPage<TeacherModel>(page);
    }

    @RequestMapping(value = "/deleteClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteClass(@RequestBody String payload) {
        String classUid = FastJsonUtil.findStringValue(payload, "class_uid");
        int total = classService.deleteClass(classUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除班级信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/updateClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateClass(@RequestBody String payload) {
        ClassModel ClassModel = FastJsonUtil.toBean(payload, ClassModel.class);
        int total = classService.updateClass(ClassModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改班级信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/getClass", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object getClass(@RequestBody String payload) {
        String ClassUid = FastJsonUtil.findStringValue(payload, "class_uid");
        ClassModel classModel = classService.getClass(ClassUid);
        return ResultBuilderUtil.buildSuccess(classModel);
    }


}
