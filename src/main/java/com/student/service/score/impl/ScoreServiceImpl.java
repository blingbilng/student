package com.student.service.score.impl;

import com.student.common.base.BasePageRequest;
import com.student.common.base.UserTypeEnum;
import com.student.common.result.GridPage;
import com.student.common.utils.FastJsonUtil;
import com.student.mapper.ScoreMapper;
import com.student.mapper.TermMapper;
import com.student.pojo.score.ScoreModel;
import com.student.pojo.score.ScoreRequestDTO;
import com.student.pojo.term.TermModel;
import com.student.pojo.user.UserInfoModel;
import com.student.pojo.user.UserInfoRequestDTO;
import com.student.service.course.impl.CourseServiceImpl;
import com.student.service.score.ScoreService;
import com.student.service.user.UserService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * @author ll
 * @date 2018/4/16 16:08
 */
@Service
public class ScoreServiceImpl implements ScoreService {
    private static final Logger logger = LoggerFactory.getLogger(CourseServiceImpl.class);

    @Autowired
    private UserService userService;

    @Autowired
    private ScoreMapper scoreMapper;

    @Autowired
    private TermMapper termMapper;

    @Override
    public GridPage<ScoreModel> pageClassScore(ScoreRequestDTO requestDTO) {
        logger.info("pageClassScore:{}", FastJsonUtil.toJSONString(requestDTO));
        if (StringUtils.isEmpty(requestDTO.getTermUid())) {
            List<TermModel> list = termMapper.listTerm(new BasePageRequest());
            if (null != list && list.size() > 0) {
                requestDTO.setTermUid(list.get(0).getTermUid());
            }
        }
        int total = scoreMapper.countClassScore(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<ScoreModel> rows = scoreMapper.listClassScore(requestDTO);

        return new GridPage<>(StringUtils.isEmpty(requestDTO.getClassUid()) ? rows : rows.stream().filter(row -> Objects.equals(requestDTO.getClassUid(), row.getClassUid())).collect(Collectors.toList()), total);
    }

    @Override
    public GridPage<ScoreModel> pageStudentScore(ScoreRequestDTO requestDTO) {
        logger.info("pageStudentScore:{}", FastJsonUtil.toJSONString(requestDTO));
        if (!StringUtils.isEmpty(requestDTO.getUserUid())) {
            if (judgeStudentPermission(requestDTO.getUserUid())) {
                requestDTO.setStudentUid(requestDTO.getUserUid());
            }
        }
        int total = scoreMapper.countStudentScore(requestDTO);
        if (0 == total) {
            return new GridPage<>();
        }
        List<ScoreModel> rows = scoreMapper.listStudentScore(requestDTO);
        return new GridPage<>(rows, total);
    }

    @Override
    public int createScore(ScoreModel scoreModel) {
        int total = scoreMapper.createStudentScore(scoreModel);
        if (0 == total) {
            logger.info("Error createScore：{}", FastJsonUtil.toJSONString(scoreModel));
        }
        return total;
    }

    @Override
    public int updateScore(ScoreModel scoreModel) {
        int total = scoreMapper.updateStudentScore(scoreModel);
        if (0 == total) {
            logger.info("Error updateScore：{}", FastJsonUtil.toJSONString(scoreModel));
        }
        return total;
    }

    @Override
    public int deleteScore(String scoreUid) {
        int total = scoreMapper.deleteStudentScore(scoreUid);
        if (0 == total) {
            logger.info("Error deleteScore：{}", scoreUid);
        }
        return total;
    }

    @Override
    public int deleteScores(List<String> scoreUids) {
        return 0;
    }

    private boolean judgeStudentPermission(String userUid) {
        UserInfoModel userInfoModel = getUserInfoModel(userUid);
        if (!Objects.isNull(userInfoModel) &&
                UserTypeEnum.TYP_STUDENT.name().equals(userInfoModel.getUserType())) {
            return true;
        }
        return false;
    }

    private boolean judgeTeacherPermission(String userUid) {
        UserInfoModel userInfoModel = getUserInfoModel(userUid);
        if (UserTypeEnum.TYP_TEACHER.name().equals(userInfoModel.getUserType())) {
            return true;
        }
        return false;
    }

    private UserInfoModel getUserInfoModel(String userUid) {
        UserInfoRequestDTO requestDTO = new UserInfoRequestDTO();
        requestDTO.setUserUid(userUid);
        return userService.getUserInfo(requestDTO);
    }
}
