package com.student.common.base;

import com.alibaba.fastjson.annotation.JSONField;
import org.springframework.util.StringUtils;

/**
 * 分页请求的 通用参数 类
 *
 */
public class BasePageRequest {

	@JSONField(name = "user_uid")
	private String userUid;
	
	@JSONField(name = "page")
	int page = 1;
	
	@JSONField(name = "limit")
	int limit = 10;
	
	@JSONField(name = "sort_field")
	String sortField = "id";
	
	@JSONField(name = "order")
	String order = "desc";

	protected int getPageStart(){
		return (page-1)*limit;
	}

	public String getUserUid() {
		return userUid;
	}

	public void setUserUid(String userUid) {
		this.userUid = userUid;
	}

	public String getSortField() {
		return sortField;
	}

	public void setSortField(String sortField) {
		this.sortField = StringUtils.isEmpty(sortField) ? "id" : sortField;
	}

	public String getOrder() {
		return order;
	}

	public void setOrder(String order) {
		this.order = order;
	}

	public int getPage() {
		return (page-1)*limit;
	}

	public void setPage(int pageNo) {
		this.page = pageNo < 1 ? 1 : pageNo;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int pageSize) {
		this.limit = pageSize < 1 ? 1 : pageSize;
	}


}
