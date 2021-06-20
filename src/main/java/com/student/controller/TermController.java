package com.student.controller;

import com.student.common.base.BasePageRequest;
import com.student.common.result.GridPage;
import com.student.common.result.LayGridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.common.utils.ResultBuilderUtil;
import com.student.pojo.term.TermModel;
import com.student.service.term.TermService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class TermController {
    @Autowired
    private TermService termService;

    @GetMapping("/termindex.html")
    public String termIndex() {
        return "admin/basicData/term/termList";
    }

    @RequestMapping(value = "/createTerm", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object createTerm(@RequestBody String payload) {
        TermModel termModel = FastJsonUtil.toBean(payload, TermModel.class);
        int total = termService.createTerm(termModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("插入学期信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/pageTerm", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object pageTerm(BasePageRequest requestDTO) {
        GridPage<TermModel> page = termService.pageTerm(requestDTO);
        return new LayGridPage<TermModel>(page);
    }

    @RequestMapping(value = "/deleteTerm", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object deleteTerm(@RequestBody String payload) {
        String termUid = FastJsonUtil.findStringValue(payload, "term_uid");
        int total = termService.deleteTerm(termUid);
        if (0 == total) {
            return ResultBuilderUtil.buildError("删除学期信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }

    @RequestMapping(value = "/updateTerm", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Object updateTerm(@RequestBody String payload) {
        TermModel TermModel = FastJsonUtil.toBean(payload, TermModel.class);
        int total = termService.updateTerm(TermModel);
        if (0 == total) {
            return ResultBuilderUtil.buildError("修改学期信息失败");
        }
        return ResultBuilderUtil.buildSuccess(total);
    }
}
