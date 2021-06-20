package com.student.common.utils;

import java.io.Serializable;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;

/**
 * @author yaorw
 * @updateBy yrw 2017 07 07
 */
public class RedisUtils {

    private static final Logger logger = LoggerFactory.getLogger(RedisUtils.class);

    /**
     * 冒号
     */
    private static final String COLON = ":";


    @SuppressWarnings("rawtypes")
    private static RedisTemplate redisTemplate;

    @Autowired
    public void setRedisTemplate(@SuppressWarnings("rawtypes") RedisTemplate redisTemplate) {
        RedisUtils.redisTemplate = redisTemplate;
    }

    /**
     * 同一个前缀会分组存放
     */
    private static final String KEY_PREFIX = "control-center";

    private static String bulidKey(String key) {
        if (!key.startsWith(COLON)) {
            key = COLON + key;
        }
        return KEY_PREFIX + key;
    }

    /**
     * 写入缓存
     *
     * @param key
     * @param value
     * @return
     */
    public static boolean set(final String key, Object value) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(bulidKey(key), value);
            result = true;
        } catch (Exception e) {
            logger.error("写入缓存", e);
        }
        return result;
    }

    /**
     * 写入缓存
     *
     * @param key
     * @param value
     * @return
     */
    public static boolean set(final String key, Object value, Long expireTime) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(bulidKey(key), value);
            redisTemplate.expire(bulidKey(key), expireTime, TimeUnit.SECONDS);
            result = true;
        } catch (Exception e) {
            logger.error("写入缓存", e);
        }
        return result;
    }

    /**
     * 读取缓存
     *
     * @param key
     * @return
     */
    public static Object get(final String key) {
        String newKey = bulidKey(key);
        ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
        Object result = operations.get(newKey);
        return result;
    }

    /**
     * 删除对应的value
     *
     * @param key
     */
    public static void remove(final String key) {

        if (exists(key)) {
            String newkey = bulidKey(key);
            redisTemplate.delete(newkey);
        }
    }

    /**
     * 批量删除key
     *
     * @param pattern
     */
    public static void removePattern(final String pattern) {
        Set<Serializable> keys = redisTemplate.keys(pattern);
        if (keys.size() > 0)
            redisTemplate.delete(keys);
    }

    /**
     * 判断缓存中是否有对应的value
     *
     * @param key
     * @return
     */
    public static boolean exists(final String key) {
        String newkey = bulidKey(key);
        return redisTemplate.hasKey(newkey);
    }

}
