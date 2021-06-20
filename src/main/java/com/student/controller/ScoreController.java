package com.student.controller;

import com.student.common.base.BaseController;
import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.score.ScoreModel;
import com.student.pojo.score.ScoreRequestDTO;
import com.student.service.score.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

/**
 * @author ll
 * @date 2018/4/17 12:48
 */
@Controller
public class ScoreController extends BaseController {
    @Autowired
    private ScoreService scoreService;

    @GetMapping("/studentScoreList.html")
    public String studentScoreList() {
        return "admin/basicData/score/studentScoreList";
    }

    @GetMapping("/classScoreList.html")
    public String classScoreList() {
        return "admin/basicData/score/classScoreList";
    }

    @GetMapping("/scoreManagementList.html")
    public String scoreManagementList() {
        return "admin/basicData/score/scoreManagementList";
    }

    /**
     * 学生成绩页面
     * @param request
     * @param requestDTO
     * @return
     */
    @RequestMapping(value = "/pageStudentScore", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageStudentScore(HttpServletRequest request, ScoreRequestDTO requestDTO) {
        requestDTO.setUserUid(getUserUid(request));
        GridPage<ScoreModel> page = scoreService.pageStudentScore(requestDTO);
        return new LayGridPage<ScoreModel>(page);
    }

    /**
     * 班级成绩页面
     * @param requestDTO
     * @return
     */
    @RequestMapping(value = "/pageClassScore", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageClassScore(ScoreRequestDTO requestDTO) {
        GridPage<ScoreModel> page = scoreService.pageClassScore(requestDTO);
        return new LayGridPage<ScoreModel>(page);
    }

    @RequestMapping(value = "/deleteScore", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteScore(@RequestBody String payload) {
        String scoreUid = FastJsonUtil.findStringValue(payload, "score_uid");
        int total = scoreService.deleteScore(scoreUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/updateScore", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateScore(@RequestBody String payload) {
        ScoreModel scoreModel = FastJsonUtil.toBean(payload, ScoreModel.class);
        int total = scoreService.updateScore(scoreModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/createScore", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createScore(@RequestBody String payload) {
        ScoreModel scoreModel = FastJsonUtil.toBean(payload, ScoreModel.class);
        int total = scoreService.createScore(scoreModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入学生信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }
}
