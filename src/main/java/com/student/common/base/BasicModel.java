package com.student.common.base;

import com.alibaba.fastjson.annotation.JSONField;

import java.io.Serializable;

/**
 * @author ll
 * @date 2018/4/12 15:26
 */
public class BasicModel implements Serializable {
    private static final long serialVersionUID = 3553798550790123534L;
    @JSONField(name = "user_uid")
    private String userUid;
    @JSONField(name = "created_at", format = "yyyy-MM-dd HH:mm:ss")
    private String createdAt;

    @JSONField(name = "updated_at", format = "yyyy-MM-dd HH:mm:ss")
    private String updatedAt;

    @JSONField(name = "created_by")
    private String createdBy;

    @JSONField(name = "updated_by")
    private String updatedBy;

    @JSONField(serialize = false)
    private Integer id;

    public String getUserUid() {
        return userUid;
    }

    public void setUserUid(String userUid) {
        this.userUid = userUid;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public String getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getUpdatedBy() {
        return updatedBy;
    }

    public void setUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
