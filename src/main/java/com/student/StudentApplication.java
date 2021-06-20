package com.student;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.Dialect;
import com.github.pagehelper.PageHelper;
import com.student.common.utils.RedisUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.Jackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import java.util.Properties;


/**
 * @author 蘑小菇
 * @date 2017-01-24
 */
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = "com.student")
public class StudentApplication {


    private static final Logger logger = LoggerFactory.getLogger(StudentApplication.class);


    public static void main(String[] args) {
        SpringApplication.run(StudentApplication.class, args);
    }

    /**
     * 注入RedisUtils
     *
     * @return
     */
    @Bean
    public RedisUtils initRedisUtils() {
        return new RedisUtils();
    }

    /**
     * 分页插件
     *
     * @return PageHelper
     * @create 2016年2月18日
     */
    @Bean
    @ConditionalOnMissingBean
    public PageHelper pageHelper() {
        logger.info("注册MyBatis分页插件PageHelper");
        PageHelper pageHelper = new PageHelper();
        Properties properties = new Properties();
        properties.setProperty("offsetAsPageNum", "true");
//      <!-- 设置为true时，使用RowBounds分页会进行count查询 -->
        properties.setProperty("rowBoundsWithCount", "true");
//      <!-- 启用合理化时，如果pageNum<1会查询第一页，如果pageNum>pages会查询最后一页 -->
//      <!-- 禁用合理化时，如果pageNum<1或pageNum>pages会返回空数据 -->
        properties.setProperty("reasonable", "true");

        properties.setProperty("supportMethodsArguments", "true");
        properties.setProperty("returnPageInfo", "check");
        properties.setProperty("params", "count=countSql");
        properties.setProperty("dialect", Dialect.mysql.toString());
        System.setProperty("dialect", Dialect.mysql.toString());
        pageHelper.setProperties(properties);
        return pageHelper;
    }
    @Bean
    public RedisTemplate redisTemplate(RedisConnectionFactory connectionFactory) {

        RedisTemplate redisTemplate = new RedisTemplate();
        redisTemplate.setConnectionFactory(connectionFactory);
        redisTemplate.setKeySerializer(new StringRedisSerializer());

        Jackson2JsonRedisSerializer<?> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<>(Object.class);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);
        objectMapper.enableDefaultTyping(ObjectMapper.DefaultTyping.NON_FINAL);
        jackson2JsonRedisSerializer.setObjectMapper(objectMapper);
        redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
        redisTemplate.afterPropertiesSet();

        return redisTemplate;
    }

}
