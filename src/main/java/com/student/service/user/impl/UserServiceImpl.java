package com.student.service.user.impl;

import com.student.common.base.UserTypeEnum;
import com.student.common.exception.ServiceValidationException;
import com.student.mapper.TeacherMapper;
import com.student.mapper.UserInfoMapper;
import com.student.pojo.user.UserInfoDTO;
import com.student.pojo.user.UserInfoModel;
import com.student.pojo.user.UserInfoRequestDTO;
import com.student.service.user.PermissionService;
import com.student.service.user.UserService;
import org.apache.commons.lang3.EnumUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author ll
 * @date 2018/4/12 15:53
 */
@Service("userService")
public class UserServiceImpl implements UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Autowired
    private PermissionService permissionService;

    @Override
    public UserInfoModel getUserInfo(UserInfoRequestDTO requestDTO) {
        return userInfoMapper.getUserInfo(requestDTO);
    }

    @Override
    public UserInfoDTO findFullAdminUserByUserUid(String userUid) {

        UserInfoDTO userDTO = new UserInfoDTO();
        try {

            UserInfoRequestDTO requestDTO = new UserInfoRequestDTO();
            requestDTO.setUserUid(userUid);
            UserInfoModel userInfo = userInfoMapper.getUserInfo(requestDTO);

            BeanUtils.copyProperties(userInfo, userDTO);
            UserTypeEnum typeEnum = EnumUtils.getEnum(UserTypeEnum.class, userInfo.getUserType());
            //如果是管理员 全部显示 如果是用户 根据用户权限关联Uid去查
            switch (typeEnum) {
                case TYP_ADMIN:
                    userDTO.setPermissions(permissionService.findSuperAdminPermissions());
                    break;
                case TYP_STUDENT:
                    userDTO.setPermissions(permissionService.findStudentPermissions());
                    break;
                case TYP_TEACHER:
                    userDTO.setPermissions(permissionService.findTeacherPermissions());
                    break;
                default:
                    break;
            }

            return userDTO;
        } catch (Exception e) {
            logger.error("获取管理员用户信息出错", e);
            throw new ServiceValidationException("获取管理员用户信息出错", e);
        }
    }
}
