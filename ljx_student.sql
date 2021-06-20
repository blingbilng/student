/*
Navicat MySQL Data Transfer

Source Server         : 47.107.78.58_3306
Source Server Version : 50725
Source Host           : 47.107.78.58:3306
Source Database       : ljx_student

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-06-01 11:58:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for st_class
-- ----------------------------
DROP TABLE IF EXISTS `st_class`;
CREATE TABLE `st_class` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `class_uid` bigint(20) NOT NULL COMMENT '班级id',
  `class_number` int(3) DEFAULT NULL COMMENT '班级人数',
  `class_name` varchar(40) DEFAULT NULL COMMENT '班级名称',
  `class_teacher_uid` bigint(20) DEFAULT NULL COMMENT '班主任id',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_class
-- ----------------------------
INSERT INTO `st_class` VALUES ('4', '44107884107137039', '0', '软件161', '44107884107137032', '2019-05-23 12:58:35', '2019-05-24 21:11:57', null, null);
INSERT INTO `st_class` VALUES ('6', '44107884107137060', '0', '软件162', '44107884107137044', '2019-05-30 11:52:57', '2019-05-30 11:52:57', null, null);
INSERT INTO `st_class` VALUES ('7', '44107884107137062', '0', '软件163', '44107884107137057', '2019-05-30 11:53:07', '2019-05-30 11:53:07', null, null);
INSERT INTO `st_class` VALUES ('8', '44107884107137064', '0', '软件164', '44107884107137059', '2019-05-30 11:53:19', '2019-05-30 11:53:19', null, null);
INSERT INTO `st_class` VALUES ('9', '44107884107137066', '0', '软件199', '44107884107137032', '2019-05-30 11:53:28', '2019-05-30 11:53:28', null, null);

-- ----------------------------
-- Table structure for st_course
-- ----------------------------
DROP TABLE IF EXISTS `st_course`;
CREATE TABLE `st_course` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `course_uid` bigint(20) NOT NULL COMMENT '课程id',
  `course_name` varchar(50) DEFAULT NULL COMMENT '课程名',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_course
-- ----------------------------
INSERT INTO `st_course` VALUES ('1', '43580508780625933', '计算机应用基础', '2018-04-16 15:25:07', '2018-04-16 15:26:40', null, null);
INSERT INTO `st_course` VALUES ('2', '43580508780625934', '网页设计与制作', '2018-04-16 15:28:54', '2018-04-16 15:28:54', null, null);
INSERT INTO `st_course` VALUES ('3', '43580508780625935', '程序设计基础', '2018-04-16 15:29:00', '2018-04-16 15:29:00', null, null);
INSERT INTO `st_course` VALUES ('4', '43580508780625936', '职业生涯规划与管理', '2018-04-16 15:29:05', '2018-04-16 15:29:05', null, null);
INSERT INTO `st_course` VALUES ('5', '43580508780625937', 'Photoshop平面设计', '2018-04-16 15:29:11', '2018-04-16 15:29:11', null, null);
INSERT INTO `st_course` VALUES ('6', '43580508780625938', '	IT与职业规划', '2018-04-16 15:29:15', '2019-05-24 21:13:31', null, null);
INSERT INTO `st_course` VALUES ('7', '43580508780625939', 'Java Web应用开发实训', '2018-04-16 15:29:20', '2018-04-16 15:29:20', null, null);
INSERT INTO `st_course` VALUES ('8', '43580508780625940', '	Android平台开发基础', '2018-04-16 15:29:24', '2018-04-16 15:29:24', null, null);

-- ----------------------------
-- Table structure for st_permissions
-- ----------------------------
DROP TABLE IF EXISTS `st_permissions`;
CREATE TABLE `st_permissions` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `permission_uid` bigint(20) NOT NULL COMMENT '权限id',
  `code` varchar(50) NOT NULL COMMENT 'code号(打标)',
  `parent_uid` bigint(10) DEFAULT NULL COMMENT '父菜单号',
  `permission_name` varchar(300) NOT NULL COMMENT '权限名',
  `state` varchar(10) DEFAULT 'TYP_ENABLE' COMMENT '状态:TYP_DELETED删除TYP_DISABLE,禁用TYP_ENABLE启用',
  `view_url` varchar(300) DEFAULT NULL COMMENT '跳转地址',
  `category` varchar(50) NOT NULL COMMENT '类别：module 菜单 menu子菜单',
  `isParent` bigint(1) NOT NULL DEFAULT '1' COMMENT '是否是父菜单  0 否 1是',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  `permission_type` int(1) NOT NULL DEFAULT '0' COMMENT '权限类型 0:所有人 1:管理员 2:学生 3:教师',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_permissions
-- ----------------------------
INSERT INTO `st_permissions` VALUES ('1', '43575923886260224', '1.1', '1', '成绩管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 13:44:01', '2018-04-13 13:44:01', 'admin', 'll', '0');
INSERT INTO `st_permissions` VALUES ('2', '43575923886260225', '1.1.1', '1', '学生成绩查询', 'TYP_ENABLE', 'studentScoreList.html', 'menu', '0', '2018-04-13 13:46:41', '2018-04-13 13:46:41', 'admin', 'll', '2');
INSERT INTO `st_permissions` VALUES ('3', '43580508780625942', '1.1.2', '1', '班级成绩管理', 'TYP_ENABLE', 'classScoreList.html', 'menu', '0', '2018-04-13 13:46:41', '2018-04-13 13:46:41', 'admin', 'll', '3');
INSERT INTO `st_permissions` VALUES ('4', '43575923886260228', '1.1.3', '1', '成绩管理', 'TYP_ENABLE', 'scoreManagementList.html', 'menu', '0', '2018-04-13 13:48:16', '2018-04-13 13:48:16', 'admin', 'll', '3');
INSERT INTO `st_permissions` VALUES ('5', '43576317647519745', '1.2', '2', '学生信息管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '3');
INSERT INTO `st_permissions` VALUES ('6', '43576317647519746', '1.3', '3', '班级信息管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 16:56:19', '2018-04-13 16:56:19', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('7', '43576317647519747', '1.4', '4', '教师信息管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 16:56:23', '2018-04-13 16:56:23', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('8', '43576317647519748', '1.5', '5', '学科信息管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 16:56:30', '2018-04-13 16:56:30', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('9', '43576317647519749', '1.2.1', '2', '学生信息管理', 'TYP_ENABLE', 'pageStudent.html', 'menu', '0', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '3');
INSERT INTO `st_permissions` VALUES ('10', '43576317647519750', '1.3.1', '3', '班级信息管理', 'TYP_ENABLE', 'classIndex.html', 'menu', '0', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('11', '43576317647519751', '1.4.1', '4', '教师信息管理', 'TYP_ENABLE', 'teacherindex.html', 'menu', '0', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('12', '43576317647519752', '1.5.1', '5', '学科信息管理', 'TYP_ENABLE', 'pageCourse.html', 'menu', '0', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '1');
INSERT INTO `st_permissions` VALUES ('13', '43576317647519755', '1.6', '6', '学期信息管理', 'TYP_ENABLE', '', 'module', '1', '2018-04-13 16:56:30', '2018-04-13 16:56:30', 'admin', '', '3');
INSERT INTO `st_permissions` VALUES ('14', '43576317647519756', '1.6.1', '6', '学期信息管理', 'TYP_ENABLE', 'termindex.html', 'menu', '0', '2018-04-13 16:56:07', '2018-04-13 16:56:07', 'admin', '', '3');

-- ----------------------------
-- Table structure for st_score
-- ----------------------------
DROP TABLE IF EXISTS `st_score`;
CREATE TABLE `st_score` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `score_uid` bigint(20) NOT NULL COMMENT '成绩uid',
  `score` int(3) DEFAULT NULL COMMENT '分数',
  `student_uid` bigint(20) NOT NULL COMMENT '学生id',
  `course_uid` bigint(20) DEFAULT NULL COMMENT '课程id',
  `term_uid` bigint(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_course_uid_index` (`score_uid`,`student_uid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_score
-- ----------------------------
INSERT INTO `st_score` VALUES ('12', '44107884107137045', '90', '44107884107137034', '43580508780625940', '44107884107137041', '2019-05-24 21:09:07', '2019-05-24 21:09:24', null, null);

-- ----------------------------
-- Table structure for st_student
-- ----------------------------
DROP TABLE IF EXISTS `st_student`;
CREATE TABLE `st_student` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `student_uid` bigint(20) NOT NULL COMMENT '学生uid',
  `class_uid` bigint(20) NOT NULL COMMENT '班级uid',
  `student_no` bigint(40) NOT NULL COMMENT '学号',
  `student_name` varchar(50) DEFAULT NULL COMMENT '学生姓名',
  `student_phone` varchar(40) DEFAULT NULL COMMENT '学生手机号',
  `student_sex` bigint(1) DEFAULT NULL COMMENT '学生性别 0 男 1女 ',
  `student_email` varchar(200) DEFAULT NULL COMMENT '学生邮箱',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_no_index` (`student_no`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_student
-- ----------------------------
INSERT INTO `st_student` VALUES ('6', '44107884107137034', '44107884107137039', '20162030105', '林甲兴', '13276877758', null, '374002722@qq.com', '2019-05-23 12:56:47', '2019-05-30 11:47:42', null, null);
INSERT INTO `st_student` VALUES ('7', '44107884107137046', '44107884107137039', '20162030111', '祎祎', '13222232262', null, '3400245@qq.com', '2019-05-24 21:10:33', '2019-05-30 11:48:19', null, null);
INSERT INTO `st_student` VALUES ('8', '44107884107137053', '44107884107137039', '20162030101', '陈杰', '13212345678', null, '111@qq.com', '2019-05-30 11:47:17', '2019-05-30 11:47:17', null, null);
INSERT INTO `st_student` VALUES ('9', '44107884107137054', '44107884107137039', '20162030102', '林威', '13212345679', null, '2222@qq.com', '2019-05-30 11:49:07', '2019-05-30 11:49:07', null, null);
INSERT INTO `st_student` VALUES ('10', '44107884107137055', '44107884107137039', '20162030104', '余德黎', '13276877759', null, '555@qq.com', '2019-05-30 11:49:35', '2019-05-30 11:49:35', null, null);

-- ----------------------------
-- Table structure for st_teacher
-- ----------------------------
DROP TABLE IF EXISTS `st_teacher`;
CREATE TABLE `st_teacher` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `teacher_no` bigint(11) NOT NULL,
  `teacher_uid` bigint(20) NOT NULL,
  `teacher_name` varchar(50) DEFAULT NULL COMMENT '教师名字',
  `teacher_phone` varchar(50) DEFAULT NULL COMMENT '教师手机号',
  `email` varchar(200) DEFAULT NULL COMMENT '教师邮箱',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_teacher
-- ----------------------------
INSERT INTO `st_teacher` VALUES ('4', '1314520', '44107884107137032', 'xxx', '13956713264', '466301054@xx.cc', '2019-05-17 16:51:11', '2019-05-17 16:51:11', null, null);
INSERT INTO `st_teacher` VALUES ('6', '20190', '44107884107137038', '朱颖', '166656656', '265656@qq.com', '2019-05-23 12:57:53', '2019-05-23 12:57:53', null, null);
INSERT INTO `st_teacher` VALUES ('7', '20191', '44107884107137044', '黄成明', '168856685999', '56565@qq.com', '2019-05-23 13:12:43', '2019-05-24 21:12:38', null, null);
INSERT INTO `st_teacher` VALUES ('9', '20192', '44107884107137057', '老王', '13958799915', '222@qq.com', '2019-05-30 11:51:30', '2019-05-30 11:51:30', null, null);
INSERT INTO `st_teacher` VALUES ('10', '20193', '44107884107137059', '老吕', '13858788816', '333@qq.com', '2019-05-30 11:51:50', '2019-05-30 11:51:50', null, null);

-- ----------------------------
-- Table structure for st_teacher_class_rel
-- ----------------------------
DROP TABLE IF EXISTS `st_teacher_class_rel`;
CREATE TABLE `st_teacher_class_rel` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `teacher_class_rel_uid` bigint(20) NOT NULL COMMENT '教师班级关联uid',
  `teacher_uid` bigint(20) NOT NULL COMMENT '教师uid',
  `class_uid` bigint(20) NOT NULL COMMENT '班级uid',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_teacher_class_rel
-- ----------------------------
INSERT INTO `st_teacher_class_rel` VALUES ('4', '44107884107137040', '44107884107137038', '44107884107137039', '2019-05-23 12:58:35', '2019-05-23 12:58:35', null, null);
INSERT INTO `st_teacher_class_rel` VALUES ('6', '44107884107137061', '44107884107137044', '44107884107137060', '2019-05-30 11:52:57', '2019-05-30 11:52:57', null, null);
INSERT INTO `st_teacher_class_rel` VALUES ('7', '44107884107137063', '44107884107137057', '44107884107137062', '2019-05-30 11:53:07', '2019-05-30 11:53:07', null, null);
INSERT INTO `st_teacher_class_rel` VALUES ('8', '44107884107137065', '44107884107137059', '44107884107137064', '2019-05-30 11:53:19', '2019-05-30 11:53:19', null, null);
INSERT INTO `st_teacher_class_rel` VALUES ('9', '44107884107137067', '44107884107137032', '44107884107137066', '2019-05-30 11:53:28', '2019-05-30 11:53:28', null, null);

-- ----------------------------
-- Table structure for st_term
-- ----------------------------
DROP TABLE IF EXISTS `st_term`;
CREATE TABLE `st_term` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `term_uid` bigint(11) NOT NULL,
  `term_name` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `updated_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_term
-- ----------------------------
INSERT INTO `st_term` VALUES ('5', '44107884107137041', '2016-2017', '2019-05-23 13:00:01', '2019-05-24 21:14:08', null, null);
INSERT INTO `st_term` VALUES ('6', '44107884107137052', '2017-2018', '2019-05-24 21:13:50', '2019-05-24 21:13:50', null, null);

-- ----------------------------
-- Table structure for st_user
-- ----------------------------
DROP TABLE IF EXISTS `st_user`;
CREATE TABLE `st_user` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT,
  `user_uid` bigint(20) NOT NULL COMMENT '用户uid',
  `user_name` varchar(32) NOT NULL COMMENT '用户昵称',
  `login_name` varchar(32) NOT NULL COMMENT '登录名',
  `password` varchar(32) NOT NULL COMMENT '密码',
  `user_phone` varchar(15) DEFAULT NULL COMMENT '用户手机号',
  `user_type` varchar(20) NOT NULL DEFAULT 'TYP_ADMIN' COMMENT '管理员:TYP_ADMIN 学生: TYP_STUDENT 教师: TYP_TEACHER',
  `avatar` varchar(300) DEFAULT NULL COMMENT '头像',
  `created_at` datetime DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime DEFAULT NULL COMMENT '修改时间',
  `created_by` varchar(50) DEFAULT NULL COMMENT '创建人',
  `updated_by` varchar(50) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of st_user
-- ----------------------------
INSERT INTO `st_user` VALUES ('1', '43574404138926080', 'xx', 'admin', '123456', '13588303266', 'TYP_ADMIN', 'http://wenwen.soso.com/p/20120208/20120208233856-1644545912.jpg', '2018-04-12 10:29:56', '2018-04-12 10:29:56', 'll', 'll');
INSERT INTO `st_user` VALUES ('6', '43630276831608843', '朱颖', '20152030109', '123456', '13757707724', 'TYP_TEACHER', null, '2018-05-21 00:52:01', '2018-05-21 00:52:01', null, null);
INSERT INTO `st_user` VALUES ('7', '43630276831608847', '学生', '20152030106', '123456', '13858808858', 'TYP_STUDENT', null, '2018-05-21 00:52:28', '2018-05-21 00:52:28', null, null);
INSERT INTO `st_user` VALUES ('9', '44107884107137031', '黄成明', '1314520', '123456', '13956713264', 'TYP_TEACHER', null, '2019-05-17 16:51:11', '2019-05-17 16:51:11', null, null);
INSERT INTO `st_user` VALUES ('10', '44107884107137033', 'xxxxx', '20162030106', '123456', '13956749135', 'TYP_STUDENT', null, '2019-05-17 16:51:58', '2019-05-17 16:51:58', null, null);
INSERT INTO `st_user` VALUES ('11', '44107884107137034', 'xxx', '20162030105', '123456', '15355428538', 'TYP_STUDENT', null, '2019-05-23 12:56:47', '2019-05-23 12:56:47', null, null);
INSERT INTO `st_user` VALUES ('12', '44107884107137037', '朱颖', '2019', '123456', '166656656', 'TYP_TEACHER', null, '2019-05-23 12:57:53', '2019-05-23 12:57:53', null, null);
INSERT INTO `st_user` VALUES ('13', '44107884107137043', '黄成明', '20191', '123456', '168856685', 'TYP_TEACHER', null, '2019-05-23 13:12:43', '2019-05-23 13:12:43', null, null);
INSERT INTO `st_user` VALUES ('14', '44107884107137046', 'aaa', '20162030111', '123456', '13222232262', 'TYP_STUDENT', null, '2019-05-24 21:10:33', '2019-05-24 21:10:33', null, null);
INSERT INTO `st_user` VALUES ('15', '44107884107137049', 'x', '16000', '123456', '1234568979', 'TYP_TEACHER', null, '2019-05-24 21:12:27', '2019-05-24 21:12:27', null, null);
INSERT INTO `st_user` VALUES ('16', '44107884107137053', '陈杰', '20162030101', '123456', '13212345678', 'TYP_STUDENT', null, '2019-05-30 11:47:18', '2019-05-30 11:47:18', null, null);
INSERT INTO `st_user` VALUES ('17', '44107884107137054', '林威', '20162030102', '123456', '13212345679', 'TYP_STUDENT', null, '2019-05-30 11:49:07', '2019-05-30 11:49:07', null, null);
INSERT INTO `st_user` VALUES ('18', '44107884107137055', '余德黎', '20162030104', '123456', '13276877759', 'TYP_STUDENT', null, '2019-05-30 11:49:35', '2019-05-30 11:49:35', null, null);
INSERT INTO `st_user` VALUES ('19', '44107884107137056', '老王', '20192', '123456', '13958799915', 'TYP_TEACHER', null, '2019-05-30 11:51:30', '2019-05-30 11:51:30', null, null);
INSERT INTO `st_user` VALUES ('20', '44107884107137058', '老吕', '20193', '123456', '13858788816', 'TYP_TEACHER', null, '2019-05-30 11:51:50', '2019-05-30 11:51:50', null, null);

-- ----------------------------
-- Function structure for st_uuid_short
-- ----------------------------
DROP FUNCTION IF EXISTS `st_uuid_short`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `st_uuid_short`() RETURNS decimal(20,0)
BEGIN
  DECLARE  X DECIMAL(20) ;
  DECLARE  b DECIMAL(20) ;
  DECLARE  c DECIMAL(20);
  DECLARE  d DECIMAL(20);
   SELECT uuid_short() - ((@@server_id & 255) << 56) INTO b;
   SELECT ((2 & 255) << 53) + b INTO c;
	RETURN c;
    END
;;
DELIMITER ;
