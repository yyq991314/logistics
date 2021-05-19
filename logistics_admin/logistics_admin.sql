/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : logistics_admin

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-03-21 23:05:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for api_admin
-- ----------------------------
DROP TABLE IF EXISTS `api_admin`;
CREATE TABLE `api_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `gender` smallint(6) NOT NULL,
  `status` smallint(6) NOT NULL,
  `addtime` double NOT NULL,
  `updatetime` double NOT NULL,
  `role_id` int(11) NOT NULL,
  `email` varchar(254) NOT NULL,
  `mark` longtext NOT NULL,
  `avatar` longtext NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `qq` varchar(50) NOT NULL,
  `wechat` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of api_admin
-- ----------------------------
INSERT INTO `api_admin` VALUES ('1', 'admin', '123456', '2', '1', '1615906493', '1616331608.1288047', '1', '123456@qq.com', '', '', 'admin', '18885165432', '66666666', '2345624553');
INSERT INTO `api_admin` VALUES ('2', 'fy', '123456', '2', '1', '1615984881.1604197', '1615984881.1604197', '2', '123465333@qq.com', '', '', 'fy', '13600990000', '', '');
INSERT INTO `api_admin` VALUES ('3', 'fly', '123456', '2', '1', '1615986964.6995912', '1615986964.6995912', '2', '124455242534@qq.com', '', '', 'fly', '18809000000', '', '');
INSERT INTO `api_admin` VALUES ('4', 'test', '123456', '3', '1', '1616332346.1900194', '1616332458.3424344', '2', 'test@qq.com', '', '', 'test', '18867666666', '333333333', '1234567');

-- ----------------------------
-- Table structure for api_logistics
-- ----------------------------
DROP TABLE IF EXISTS `api_logistics`;
CREATE TABLE `api_logistics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods` varchar(15) NOT NULL,
  `mtelephone` varchar(15) NOT NULL,
  `mname` varchar(50) NOT NULL,
  `rtelephone` varchar(15) NOT NULL,
  `rname` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `service_price` double NOT NULL,
  `admin_id` int(11) NOT NULL,
  `logistics_id` int(11) NOT NULL,
  `intypes` smallint(6) NOT NULL,
  `orders` smallint(6) NOT NULL,
  `status` smallint(6) NOT NULL,
  `addtime` double NOT NULL,
  `updatetime` double NOT NULL,
  `mark` longtext NOT NULL,
  `type_price` int(11) NOT NULL,
  `maddress` varchar(255) NOT NULL,
  `number` double NOT NULL,
  `raddress` varchar(255) NOT NULL,
  `weight` double NOT NULL,
  `unit_price` double NOT NULL,
  `sn` varchar(21) NOT NULL,
  `intime` double NOT NULL,
  `outtime` double NOT NULL,
  `apptime` double NOT NULL,
  `outtypes` smallint(6) NOT NULL,
  `arrtime` double NOT NULL,
  `picktime` double NOT NULL,
  `appmark` longtext NOT NULL,
  `take_id` int(11) NOT NULL,
  `taketime` double NOT NULL,
  `arrtype` int(11) NOT NULL,
  `apptype` int(11) NOT NULL,
  `take_price` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of api_logistics
-- ----------------------------

-- ----------------------------
-- Table structure for api_logisticsrecord
-- ----------------------------
DROP TABLE IF EXISTS `api_logisticsrecord`;
CREATE TABLE `api_logisticsrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logistics_id` int(11) NOT NULL,
  `title` varchar(15) NOT NULL,
  `status` smallint(6) NOT NULL,
  `addtime` double NOT NULL,
  `updatetime` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of api_logisticsrecord
-- ----------------------------

-- ----------------------------
-- Table structure for api_logisticstype
-- ----------------------------
DROP TABLE IF EXISTS `api_logisticstype`;
CREATE TABLE `api_logisticstype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(15) NOT NULL,
  `unit` double NOT NULL,
  `status` smallint(6) NOT NULL,
  `addtime` double NOT NULL,
  `updatetime` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of api_logisticstype
-- ----------------------------
INSERT INTO `api_logisticstype` VALUES ('1', '按照体重计价', '12', '0', '1615090238', '1615090238');

-- ----------------------------
-- Table structure for api_role
-- ----------------------------
DROP TABLE IF EXISTS `api_role`;
CREATE TABLE `api_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `status` smallint(6) NOT NULL,
  `addtime` double NOT NULL,
  `updatetime` double NOT NULL,
  `mark` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of api_role
-- ----------------------------
INSERT INTO `api_role` VALUES ('1', '管理员', '1', '1614923452', '1614923452', '系统管理员');
INSERT INTO `api_role` VALUES ('2', '学生', '1', '1614923452', '1614923452', '');

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_group
-- ----------------------------

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissions_group_id_b120cbf9` (`group_id`),
  KEY `auth_group_permissions_permission_id_84c5c92e` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  KEY `auth_permission_content_type_id_2f476e4b` (`content_type_id`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES ('1', 'Can add log entry', '1', 'add_logentry');
INSERT INTO `auth_permission` VALUES ('2', 'Can change log entry', '1', 'change_logentry');
INSERT INTO `auth_permission` VALUES ('3', 'Can delete log entry', '1', 'delete_logentry');
INSERT INTO `auth_permission` VALUES ('4', 'Can view log entry', '1', 'view_logentry');
INSERT INTO `auth_permission` VALUES ('5', 'Can add permission', '2', 'add_permission');
INSERT INTO `auth_permission` VALUES ('6', 'Can change permission', '2', 'change_permission');
INSERT INTO `auth_permission` VALUES ('7', 'Can delete permission', '2', 'delete_permission');
INSERT INTO `auth_permission` VALUES ('8', 'Can view permission', '2', 'view_permission');
INSERT INTO `auth_permission` VALUES ('9', 'Can add group', '3', 'add_group');
INSERT INTO `auth_permission` VALUES ('10', 'Can change group', '3', 'change_group');
INSERT INTO `auth_permission` VALUES ('11', 'Can delete group', '3', 'delete_group');
INSERT INTO `auth_permission` VALUES ('12', 'Can view group', '3', 'view_group');
INSERT INTO `auth_permission` VALUES ('13', 'Can add user', '4', 'add_user');
INSERT INTO `auth_permission` VALUES ('14', 'Can change user', '4', 'change_user');
INSERT INTO `auth_permission` VALUES ('15', 'Can delete user', '4', 'delete_user');
INSERT INTO `auth_permission` VALUES ('16', 'Can view user', '4', 'view_user');
INSERT INTO `auth_permission` VALUES ('17', 'Can add content type', '5', 'add_contenttype');
INSERT INTO `auth_permission` VALUES ('18', 'Can change content type', '5', 'change_contenttype');
INSERT INTO `auth_permission` VALUES ('19', 'Can delete content type', '5', 'delete_contenttype');
INSERT INTO `auth_permission` VALUES ('20', 'Can view content type', '5', 'view_contenttype');
INSERT INTO `auth_permission` VALUES ('21', 'Can add session', '6', 'add_session');
INSERT INTO `auth_permission` VALUES ('22', 'Can change session', '6', 'change_session');
INSERT INTO `auth_permission` VALUES ('23', 'Can delete session', '6', 'delete_session');
INSERT INTO `auth_permission` VALUES ('24', 'Can view session', '6', 'view_session');
INSERT INTO `auth_permission` VALUES ('25', 'Can add admin', '7', 'add_admin');
INSERT INTO `auth_permission` VALUES ('26', 'Can change admin', '7', 'change_admin');
INSERT INTO `auth_permission` VALUES ('27', 'Can delete admin', '7', 'delete_admin');
INSERT INTO `auth_permission` VALUES ('28', 'Can view admin', '7', 'view_admin');
INSERT INTO `auth_permission` VALUES ('29', 'Can add role', '8', 'add_role');
INSERT INTO `auth_permission` VALUES ('30', 'Can change role', '8', 'change_role');
INSERT INTO `auth_permission` VALUES ('31', 'Can delete role', '8', 'delete_role');
INSERT INTO `auth_permission` VALUES ('32', 'Can view role', '8', 'view_role');
INSERT INTO `auth_permission` VALUES ('33', 'Can add logistics', '9', 'add_logistics');
INSERT INTO `auth_permission` VALUES ('34', 'Can change logistics', '9', 'change_logistics');
INSERT INTO `auth_permission` VALUES ('35', 'Can delete logistics', '9', 'delete_logistics');
INSERT INTO `auth_permission` VALUES ('36', 'Can view logistics', '9', 'view_logistics');
INSERT INTO `auth_permission` VALUES ('37', 'Can add logistics type', '10', 'add_logisticstype');
INSERT INTO `auth_permission` VALUES ('38', 'Can change logistics type', '10', 'change_logisticstype');
INSERT INTO `auth_permission` VALUES ('39', 'Can delete logistics type', '10', 'delete_logisticstype');
INSERT INTO `auth_permission` VALUES ('40', 'Can view logistics type', '10', 'view_logisticstype');
INSERT INTO `auth_permission` VALUES ('41', 'Can add logistics record', '11', 'add_logisticsrecord');
INSERT INTO `auth_permission` VALUES ('42', 'Can change logistics record', '11', 'change_logisticsrecord');
INSERT INTO `auth_permission` VALUES ('43', 'Can delete logistics record', '11', 'delete_logisticsrecord');
INSERT INTO `auth_permission` VALUES ('44', 'Can view logistics record', '11', 'view_logisticsrecord');

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user
-- ----------------------------

-- ----------------------------
-- Table structure for auth_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_user_id_6a12ed8b` (`user_id`),
  KEY `auth_user_groups_group_id_97559544` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user_groups
-- ----------------------------

-- ----------------------------
-- Table structure for auth_user_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permissions_user_id_a95ead1b` (`user_id`),
  KEY `auth_user_user_permissions_permission_id_1fbb5f2c` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user_user_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES ('1', 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES ('7', 'api', 'admin');
INSERT INTO `django_content_type` VALUES ('9', 'api', 'logistics');
INSERT INTO `django_content_type` VALUES ('11', 'api', 'logisticsrecord');
INSERT INTO `django_content_type` VALUES ('10', 'api', 'logisticstype');
INSERT INTO `django_content_type` VALUES ('8', 'api', 'role');
INSERT INTO `django_content_type` VALUES ('3', 'auth', 'group');
INSERT INTO `django_content_type` VALUES ('2', 'auth', 'permission');
INSERT INTO `django_content_type` VALUES ('4', 'auth', 'user');
INSERT INTO `django_content_type` VALUES ('5', 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES ('6', 'sessions', 'session');

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES ('1', 'contenttypes', '0001_initial', '2021-03-04 14:01:17.315000');
INSERT INTO `django_migrations` VALUES ('2', 'auth', '0001_initial', '2021-03-04 14:01:46.720682');
INSERT INTO `django_migrations` VALUES ('3', 'admin', '0001_initial', '2021-03-04 14:02:08.807945');
INSERT INTO `django_migrations` VALUES ('4', 'admin', '0002_logentry_remove_auto_add', '2021-03-04 14:02:12.868177');
INSERT INTO `django_migrations` VALUES ('5', 'admin', '0003_logentry_add_action_flag_choices', '2021-03-04 14:02:13.027186');
INSERT INTO `django_migrations` VALUES ('6', 'api', '0001_initial', '2021-03-04 14:02:13.820232');
INSERT INTO `django_migrations` VALUES ('7', 'contenttypes', '0002_remove_content_type_name', '2021-03-04 14:02:16.131364');
INSERT INTO `django_migrations` VALUES ('8', 'auth', '0002_alter_permission_name_max_length', '2021-03-04 14:02:17.726455');
INSERT INTO `django_migrations` VALUES ('9', 'auth', '0003_alter_user_email_max_length', '2021-03-04 14:02:19.275544');
INSERT INTO `django_migrations` VALUES ('10', 'auth', '0004_alter_user_username_opts', '2021-03-04 14:02:19.411551');
INSERT INTO `django_migrations` VALUES ('11', 'auth', '0005_alter_user_last_login_null', '2021-03-04 14:02:20.582618');
INSERT INTO `django_migrations` VALUES ('12', 'auth', '0006_require_contenttypes_0002', '2021-03-04 14:02:20.646622');
INSERT INTO `django_migrations` VALUES ('13', 'auth', '0007_alter_validators_add_error_messages', '2021-03-04 14:02:20.704625');
INSERT INTO `django_migrations` VALUES ('14', 'auth', '0008_alter_user_username_max_length', '2021-03-04 14:02:22.099705');
INSERT INTO `django_migrations` VALUES ('15', 'auth', '0009_alter_user_last_name_max_length', '2021-03-04 14:02:23.568789');
INSERT INTO `django_migrations` VALUES ('16', 'auth', '0010_alter_group_name_max_length', '2021-03-04 14:02:25.305888');
INSERT INTO `django_migrations` VALUES ('17', 'auth', '0011_update_proxy_permissions', '2021-03-04 14:02:25.362892');
INSERT INTO `django_migrations` VALUES ('18', 'auth', '0012_alter_user_first_name_max_length', '2021-03-04 14:02:27.799031');
INSERT INTO `django_migrations` VALUES ('19', 'sessions', '0001_initial', '2021-03-04 14:02:33.053332');
INSERT INTO `django_migrations` VALUES ('20', 'api', '0002_role', '2021-03-05 05:49:37.385999');
INSERT INTO `django_migrations` VALUES ('21', 'api', '0003_logistics_logisticstype', '2021-03-07 03:29:39.951249');
INSERT INTO `django_migrations` VALUES ('22', 'api', '0004_logistics_type_price', '2021-03-07 03:35:58.111878');
INSERT INTO `django_migrations` VALUES ('23', 'api', '0005_auto_20210307_1202', '2021-03-07 04:02:44.290747');
INSERT INTO `django_migrations` VALUES ('24', 'api', '0006_auto_20210307_1211', '2021-03-07 04:11:23.982471');
INSERT INTO `django_migrations` VALUES ('25', 'api', '0007_logistics_unit_price', '2021-03-07 04:12:35.515563');
INSERT INTO `django_migrations` VALUES ('26', 'api', '0008_auto_20210308_2157', '2021-03-08 13:57:29.645299');
INSERT INTO `django_migrations` VALUES ('27', 'api', '0009_auto_20210309_2127', '2021-03-10 02:21:31.959262');
INSERT INTO `django_migrations` VALUES ('28', 'api', '0010_auto_20210310_1109', '2021-03-10 03:09:57.342884');
INSERT INTO `django_migrations` VALUES ('29', 'api', '0011_remove_logisticsrecord_city', '2021-03-10 07:25:11.634236');
INSERT INTO `django_migrations` VALUES ('30', 'api', '0012_auto_20210310_2053', '2021-03-10 12:53:51.879940');
INSERT INTO `django_migrations` VALUES ('31', 'api', '0013_logistics_pickmark', '2021-03-10 14:33:52.147135');
INSERT INTO `django_migrations` VALUES ('32', 'api', '0014_auto_20210310_2245', '2021-03-10 14:45:51.719292');
INSERT INTO `django_migrations` VALUES ('33', 'api', '0015_auto_20210311_1542', '2021-03-11 07:42:21.268454');
INSERT INTO `django_migrations` VALUES ('34', 'api', '0016_logistics_arrtype', '2021-03-12 11:56:56.271819');
INSERT INTO `django_migrations` VALUES ('35', 'api', '0017_logistics_apptype', '2021-03-12 13:31:20.816812');
INSERT INTO `django_migrations` VALUES ('36', 'api', '0018_auto_20210313_2050', '2021-03-13 12:50:30.336562');
INSERT INTO `django_migrations` VALUES ('37', 'api', '0019_auto_20210321_1934', '2021-03-21 11:34:31.725019');
INSERT INTO `django_migrations` VALUES ('38', 'api', '0020_logistics_take_price', '2021-03-21 11:36:00.558100');

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('0wim6ze96icyfeyqikankxs8ggot1w0y', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNbTw:q2oo1e4uDiM6XMrQ8M46Pd4ci52GRf3_ZNn3LUdvEwE', '2021-04-03 13:17:32.063294');
INSERT INTO `django_session` VALUES ('1plv59cx6aa2rlj6pvkxa9wmmqk6asjr', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lJx9I:7L7tiHxOiVv07xoKurhfdKbCfMF6Cs58RhITceyt7cc', '2021-03-24 11:37:08.256627');
INSERT INTO `django_session` VALUES ('9jhakv21nrfa61dxh7fpre650t46qjtr', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNpED:cFsoiZMIjrZOW9KCD2H9J2MqGnitFvFk8YyNpNk-Otk', '2021-04-04 03:58:13.127639');
INSERT INTO `django_session` VALUES ('dy9pmts02q99h36ybp21zojanjhfemzo', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNoNI:NFY17fFJzRX-hUc00NBAbc5nNRdmCINpOO3zojMH2mc', '2021-04-04 03:03:32.079040');
INSERT INTO `django_session` VALUES ('f6cb0uzpqhthidlynixn3g4f536pskml', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lKBeC:B6_VfhwQ1A1aMLOf-vTRCdAcvtNJ-NNR0wZMwI1sjas', '2021-03-25 03:06:00.776691');
INSERT INTO `django_session` VALUES ('fvjykrehrc79coge4run6852zkgpk4ed', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lM95Z:0U6MyMYL_fGpNWyobgJvpstfInPg7h3dTPcVzeqh0eI', '2021-03-30 12:46:21.000449');
INSERT INTO `django_session` VALUES ('ijque45j1ghqekfnfw4g9ntru1zxu5i4', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lJGkv:3VI-xe5zEYa3vdguKjV_GRlEB5vzTQECYcV2M3aBNQ4', '2021-03-22 14:21:09.292499');
INSERT INTO `django_session` VALUES ('j6yf6ccuxzgejztkr6rvpybzy9pbhylr', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lImBu:LnB9udVm7fkHz0xnTkTzDhSUL_BvD7yR2GS5zdVLMaA', '2021-03-21 05:42:58.596745');
INSERT INTO `django_session` VALUES ('mgjyzpluc5abb6qsqkjz6wm9tfn3ldvr', 'eyJ1c2VybmFtZSI6ImZseSIsInBhc3N3b3JkIjoiMTIzNDU2In0:1lNVVV:Nqf1KM2SWSNSi9aAPjC_jtncuHdgWfwtXQlMEKE-tdM', '2021-04-03 06:54:45.799699');
INSERT INTO `django_session` VALUES ('ncngz2symd6uynh6iny8tu7r7yjh3e7f', 'eyJ1c2VybmFtZSI6ImZ5IiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNVaU:DNKy17k1ZWS-dYx4JHvRHwcU2GRiQIdkQSIt1BHGLb4', '2021-04-03 06:59:54.616362');
INSERT INTO `django_session` VALUES ('pz18ahhs1xg93tyvdzk0o8i92t8xa1ao', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNwRV:25D0jAfx1FVgqqkkH2CZWNx7pfJWK89lPnLZcy6ojrs', '2021-04-04 11:40:25.714266');
INSERT INTO `django_session` VALUES ('r30klcp9nitqkhya0yef9s6n55tzbh9o', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNbiz:BboWAQKcCvAv_nGNL524krcOsWbz9X-kHbFfMAF1rJY', '2021-04-03 13:33:05.641692');
INSERT INTO `django_session` VALUES ('txfpt1cq03agx23huuvexh5jino0cr2m', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lI9el:g5xMUlwN9w8ANbDOTAgyK7lH4VxwWHZFCugvofBYcpo', '2021-03-19 12:34:11.487028');
INSERT INTO `django_session` VALUES ('yx1op2ge9l55emrckyy1licyzqx54opk', 'eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIxMjM0NTYifQ:1lNbP3:ci5dUifZm5DIlnFH7g9Zz1Dpf2VjdUGcfPQY8CC3CT0', '2021-04-03 13:12:29.239974');
