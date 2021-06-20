package com.student.service.user;

import com.student.pojo.user.UserInfoDTO;
import com.student.pojo.user.UserInfoModel;
import com.student.pojo.user.UserInfoRequestDTO;

/**
 * @author ll
 * @date 2018/4/12 15:53
 */
public interface UserService {

    UserInfoModel getUserInfo(UserInfoRequestDTO requestDTO);

    UserInfoDTO findFullAdminUserByUserUid(String userUid);
}
