package com.student.common.base;

import java.io.Serializable;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

/***
 * mybtis 基础接口
 *
 * @author 蘑菇
 *
 * @param <T>
 */
@Mapper
public interface BaseMapper<T> {

    /**
     * 添加
     *
     * @param bean
     */
    void add(T bean);

    /**
     * 根据ID删除
     *
     * @param id
     */
    int delete(Serializable id);

    /**
     * 修改
     */
    void update(T bean);

    /**
     * 根据ID查询
     */
    T get(Serializable id);

    /**
     * 查询List结果集
     */
    List<T> findByCondition(Object parm);
}