package com.student.service.term;

import com.student.common.base.BasePageRequest;
import com.student.common.result.GridPage;
import com.student.pojo.term.TermModel;


public interface TermService {
    int createTerm(TermModel TermModel);

    GridPage<TermModel> pageTerm(BasePageRequest requestDTO);

    int updateTerm(TermModel TermModel);

    int deleteTerm(String TermUid);
}
