package com.student.common.base;

/**
 * @Descriptions:
 * @Author: 蘑小菇
 * @Date : 2017-12-08 16:34
 */
public class Query<T> extends BaseParmtersVO {

    private T query;

    public T getQuery() {
        return query;
    }

    public void setQuery(T query) {
        this.query = query;
    }
}
