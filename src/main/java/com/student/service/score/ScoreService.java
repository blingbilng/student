package com.student.service.score;

import com.student.common.result.GridPage;
import com.student.pojo.score.ScoreModel;
import com.student.pojo.score.ScoreRequestDTO;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/16 16:08
 */
public interface ScoreService {

    GridPage<ScoreModel> pageClassScore(ScoreRequestDTO requestDTO);

    GridPage<ScoreModel> pageStudentScore(ScoreRequestDTO requestDTO);

    int createScore(ScoreModel scoreModel);

    int updateScore(ScoreModel scoreModel);

    int deleteScore(String scoreUid);

    int deleteScores(List<String> scoreUids);
}
