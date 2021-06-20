package com.student.pojo.user;

import com.alibaba.fastjson.annotation.JSONField;
import com.student.common.base.BasicModel;
import org.apache.ibatis.type.Alias;

/**
 * @author ll
 * @date 2018/4/12 16:08
 */
@Alias("Permissions")
public class Permissions extends BasicModel{
    @JSONField(name = "permission_uid")
    private String permissionUid;
    @JSONField(name = "parent_uid")
    private String parentUid;
    @JSONField(name = "permission_name")
    private String permissionName;
    @JSONField(name = "view_url")
    private String viewUrl;
    private String category;
    private String code;
    private String state;
    private boolean checked;
    private boolean isParent;

    public boolean isParent() {
        return isParent;
    }

    public void setParent(boolean parent) {
        isParent = parent;
    }

    public boolean isChecked() {
        return checked;
    }

    public void setChecked(boolean checked) {
        this.checked = checked;
    }

    public String getPermissionUid() {
        return permissionUid;
    }

    public void setPermissionUid(String permissionUid) {
        this.permissionUid = permissionUid;
    }

    public String getParentUid() {
        return parentUid;
    }

    public void setParentUid(String parentUid) {
        this.parentUid = parentUid;
    }

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }

    public String getViewUrl() {
        return viewUrl;
    }

    public void setViewUrl(String viewUrl) {
        this.viewUrl = viewUrl;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
