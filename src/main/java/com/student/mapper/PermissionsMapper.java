package com.student.mapper;

import com.student.pojo.user.Permissions;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/13 13:04
 */
@Mapper
public interface PermissionsMapper {
    List<Permissions> findSuperAdminPermissions();

    List<Permissions> findStudentPermissions();

    List<Permissions> findTeacherPermissions();
}
