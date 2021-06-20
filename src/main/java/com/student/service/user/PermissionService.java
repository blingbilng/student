package com.student.service.user;

import com.student.pojo.user.Permissions;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/13 14:23
 */
public interface PermissionService {
    List<Permissions> findSuperAdminPermissions();

    List<Permissions> findStudentPermissions();

    List<Permissions> findTeacherPermissions();
}
