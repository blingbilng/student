package com.student.pojo.user;

import java.util.List;

/**
 * @author ll
 * @date 2018/4/12 16:04
 */
public class UserInfoDTO extends UserInfoModel {

    private List<Permissions> permissions;

    public List<Permissions> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permissions> permissions) {
        this.permissions = permissions;
    }
}
