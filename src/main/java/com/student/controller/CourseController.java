package com.student.controller;

import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.course.CourseModel;
import com.student.pojo.course.CourseRequestDTO;
import com.student.service.course.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

/**
 * @author ll
 * @date 2018/4/16 14:56
 */
@Controller
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("/pageCourse.html")
    public String studentIndex() {
        return "admin/basicData/course/courseList";
    }

    /**
     * 插入学科信息
     * @param payload
     * @return
     */
    @RequestMapping(value = "/createCourse", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createCourse(@RequestBody String payload) {
        CourseModel courseModel = FastJsonUtil.toBean(payload, CourseModel.class);
        int total = courseService.createCourse(courseModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入课程信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    /**
     *  查询学科信息
     * @param requestDTO
     * @return
     */
    @RequestMapping(value = "/pageCourse", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageCourse(CourseRequestDTO requestDTO) {
        GridPage<CourseModel> page = courseService.pageCourse(requestDTO);
        return new LayGridPage<CourseModel>(page);
    }

    /**
     * 删除学科信息
     * @param payload
     * @return
     */
    @RequestMapping(value = "/deleteCourse", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteCourse(@RequestBody String payload) {
        String courseUid = FastJsonUtil.findStringValue(payload, "course_uid");
        int total = courseService.deleteCourse(courseUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除课程信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    /**
     * 更新学科信息
     * @param payload
     * @return
     */
    @RequestMapping(value = "/updateCourse", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateCourse(@RequestBody String payload) {
        CourseModel courseModel = FastJsonUtil.toBean(payload, CourseModel.class);
        int total = courseService.updateCourse(courseModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改课程信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }
}
