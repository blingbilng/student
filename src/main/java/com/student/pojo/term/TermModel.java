package com.student.pojo.term;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;

public class TermModel extends BasicModel {
    @JSONField(name = "term_name")
    private String termName;
    @JSONField(name = "term_uid")
    private String termUid;

    public String getTermUid() {
        return termUid;
    }

    public void setTermUid(String termUid) {
        this.termUid = termUid;
    }

    public String getTermName() {
        return termName;
    }

    public void setTermName(String termName) {
        this.termName = termName;
    }
}
