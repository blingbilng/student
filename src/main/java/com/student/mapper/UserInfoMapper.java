package com.student.mapper;

import com.student.pojo.user.UserInfoModel;
import com.student.pojo.user.UserInfoRequestDTO;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author ll
 * @date 2018/4/12 16:54
 */
@Mapper
public interface UserInfoMapper {

    UserInfoModel getUserInfo(UserInfoRequestDTO requestDTO);

    int createUserInfo(UserInfoModel userInfoModel);
}
