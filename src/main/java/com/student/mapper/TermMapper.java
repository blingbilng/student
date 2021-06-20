package com.student.mapper;


import com.student.common.base.BasePageRequest;
import com.student.pojo.term.TermModel;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TermMapper {
    int createTerm(TermModel TermModel);

    List<TermModel> listTerm(BasePageRequest requestDTO);

    int countTerm(BasePageRequest requestDTO);

    int updateTerm(TermModel TermModel);

    int deleteTerm(@Param("termUid") String TermUid);
}
