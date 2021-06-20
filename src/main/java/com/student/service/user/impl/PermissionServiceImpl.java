package com.student.service.user.impl;

import com.student.mapper.PermissionsMapper;
import com.student.pojo.user.Permissions;
import com.student.service.user.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/13 14:24
 */
@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionsMapper permissionsMapper;

    @Override
    public List<Permissions> findSuperAdminPermissions() {
        return permissionsMapper.findSuperAdminPermissions();
    }

    @Override
    public List<Permissions> findStudentPermissions() {
        return permissionsMapper.findStudentPermissions();
    }

    @Override
    public List<Permissions> findTeacherPermissions() {
        return permissionsMapper.findTeacherPermissions();
    }


}
