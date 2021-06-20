package com.student.mapper;

import com.student.pojo.score.ScoreModel;
import com.student.pojo.score.ScoreRequestDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/16 16:07
 */
@Mapper
public interface ScoreMapper {
    List<ScoreModel> listStudentScore(ScoreRequestDTO requestDTO);

    int countStudentScore(ScoreRequestDTO requestDTO);

    List<ScoreModel> listClassScore(ScoreRequestDTO requestDTO);

    int countClassScore(ScoreRequestDTO requestDTO);

    int createStudentScore(ScoreModel scoreModel);

    int updateStudentScore(ScoreModel scoreModel);

    int deleteStudentScore(@Param("scoreUid") String scoreUid);

}
