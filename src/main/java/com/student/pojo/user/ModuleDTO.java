package com.student.pojo.user;

import java.io.Serializable;
import java.util.List;

/**
 * @author ll
 * @date 2018/4/12 16:13
 */
public class ModuleDTO implements Serializable {
    private String permissionUid;
    private String permissionName;
    private List<Permissions> menu;

    public String getPermissionUid() {
        return permissionUid;
    }

    public void setPermissionUid(String permissionUid) {
        this.permissionUid = permissionUid;
    }

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }

    public List<Permissions> getMenu() {
        return menu;
    }

    public void setMenu(List<Permissions> menu) {
        this.menu = menu;
    }
}
