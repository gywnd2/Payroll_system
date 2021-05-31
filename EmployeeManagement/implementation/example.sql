--
-- Table structure for table `Authorized`
--

CREATE TABLE `Authorized` (
  `name` varchar(30) NOT NULL,
  `id` text NOT NULL,
  `password` text NOT NULL,
  `login_status` boolean,
  PRIMARY KEY (`name`)
);

--
-- Dumping data for table `Authorized`
--
INSERT INTO `Authorized` VALUES ('boss', 'cau2021', 'se2021!!', 0);


--
-- Table structure for table `topic`
--

CREATE TABLE `DataList` (
  `id` int NOT NULL PRIMARY KEY,
  `name` varchar(30) NOT NULL,
  `password` text NOT NULL,
  `phoneNUM` varchar(30) NOT NULL,
  `working_hours` time DEFAULT 0,
  `pay` int(11) DEFAULT 0,
  `pay_op_type` int NOT NULL,
  `pay_op_amount` int NOT NULL
);

--
-- Dumping data for table `DataList`
--

INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210001, 'aaa','afegjwkn','010-9999-8888', 1, 8000);
INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210002, 'bbb','aasa1234','010-6789-9876', 0, 2000000);
INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210003, 'ccc','0987wdpo','010-1234-5678', 0, 3000000);
INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210004, 'ddd','qw76wd54','010-6666-7777', 0, 4000000);
INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210005, 'eee','nj23nj34','010-3388-7766', 0, 5000000);
INSERT INTO `DataList` (id, name, password, phoneNUM, pay_op_type, pay_op_amount) VALUES (20210006, 'fff','es45fe44','010-2345-6532', 1, 10000);
