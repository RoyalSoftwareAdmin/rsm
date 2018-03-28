-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 28, 2018 at 04:25 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `masters`
--

-- --------------------------------------------------------

--
-- Table structure for table `rsm_category`
--

CREATE TABLE `rsm_category` (
  `cat_id` int(4) NOT NULL,
  `cat_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_category`
--

INSERT INTO `rsm_category` (`cat_id`, `cat_name`) VALUES
(1, 'Technical'),
(2, 'Analytical'),
(3, 'Logical'),
(4, 'Aptitude'),
(5, 'Current Affiars');

-- --------------------------------------------------------

--
-- Table structure for table `rsm_company`
--

CREATE TABLE `rsm_company` (
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `mobile` varchar(12) NOT NULL,
  `password` varchar(40) NOT NULL,
  `status` int(11) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_company`
--

INSERT INTO `rsm_company` (`fname`, `lname`, `email`, `mobile`, `password`, `status`, `value`) VALUES
('madhu', 'sudan', 'rkmadhu619@gmail.com', '9008836782', '90973deb0c9a0aa1863669ebeaf23155', 1, 128);

-- --------------------------------------------------------

--
-- Table structure for table `rsm_div`
--

CREATE TABLE `rsm_div` (
  `div_id` int(11) NOT NULL,
  `div_name` varchar(20) NOT NULL,
  `cat_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_div`
--

INSERT INTO `rsm_div` (`div_id`, `div_name`, `cat_id`) VALUES
(1, 'Web Developer', 1),
(2, 'Backend Developer', 1),
(3, 'System Analyst', 1),
(4, 'Business Analyst', 1),
(5, 'Technical Support', 1),
(6, 'Network Engineer', 1),
(7, 'Technical Sales', 1),
(8, 'Software Tester', 1),
(9, 'Technical Writer', 1),
(10, 'Communication', 2),
(11, 'Creativity', 2),
(12, 'Critical Thinkinh', 2),
(13, 'Data Analysis', 2),
(14, 'Research', 2),
(15, 'Diagrammetic', 3),
(16, 'Verbal', 3),
(17, 'Non-Verbal', 3),
(18, 'Numerical', 3),
(19, 'Situational', 3),
(20, 'Sports', 5),
(21, 'Science', 5),
(22, 'Business', 5),
(23, 'Politics', 5),
(24, 'Awards', 5),
(25, 'International', 5),
(26, 'General', 5),
(27, 'Economy', 5),
(28, 'ALL', 5);

-- --------------------------------------------------------

--
-- Table structure for table `rsm_files`
--

CREATE TABLE `rsm_files` (
  `name` varchar(100) NOT NULL,
  `category` varchar(20) NOT NULL,
  `filename` varchar(100) NOT NULL,
  `path` varchar(100) NOT NULL,
  `email` varchar(40) NOT NULL,
  `uploaddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_files`
--

INSERT INTO `rsm_files` (`name`, `category`, `filename`, `path`, `email`, `uploaddate`) VALUES
('royal', '2', 'mysore-palace-at-night-dasara-wiki', 'royal@royalsoftware.com/mysore-palace-at-night-dasara-wiki_01_03_12.jpg', 'royal@royalsoftware.com', '2018-03-23'),
('royal', '2', 'mysore-palace-1', 'royal@royalsoftware.com/mysore-palace-1_01_03_12.jpg', 'royal@royalsoftware.com', '2018-03-23');

-- --------------------------------------------------------

--
-- Table structure for table `rsm_login`
--

CREATE TABLE `rsm_login` (
  `userName` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_login`
--

INSERT INTO `rsm_login` (`userName`, `Password`, `value`) VALUES
('madhu@gmail.com', '90973deb0c9a0aa1863669ebeaf23155', 3),
('rkmadhu619@gmail.com', '90973deb0c9a0aa1863669ebeaf23155', 2),
('royal@royalsoftware.com', '7a50d66b23e07be28b766721a85fb00b', 3),
('test@gmail.com', '8e16dbf6bd4ca855b60b64078c4ce9bd', 3);

-- --------------------------------------------------------

--
-- Table structure for table `rsm_payment`
--

CREATE TABLE `rsm_payment` (
  `userName` varchar(40) NOT NULL,
  `payDate` date NOT NULL,
  `amount` int(11) NOT NULL,
  `withdrawDate` date NOT NULL,
  `balance` int(10) NOT NULL,
  `withdrawamt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsm_profile`
--

CREATE TABLE `rsm_profile` (
  `userName` varchar(40) NOT NULL,
  `dob` date NOT NULL,
  `country` varchar(40) NOT NULL,
  `state` varchar(40) NOT NULL,
  `zip` int(6) NOT NULL,
  `college` varchar(100) NOT NULL,
  `department` varchar(40) NOT NULL,
  `blood` varchar(10) NOT NULL,
  `id` varchar(25) NOT NULL,
  `techskills` varchar(300) NOT NULL,
  `mobile` varchar(11) NOT NULL,
  `office` varchar(15) NOT NULL,
  `webbsite` varchar(100) NOT NULL,
  `others` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_profile`
--

INSERT INTO `rsm_profile` (`userName`, `dob`, `country`, `state`, `zip`, `college`, `department`, `blood`, `id`, `techskills`, `mobile`, `office`, `webbsite`, `others`) VALUES
('madhu@gmail.com', '1991-07-28', 'India', 'Karnataka', 571438, 'R V College of Engineering', 'MCA', 'B+ve', '2013001', 'HTML5, CSS3, Javascript, jQuery, Angular, PHP, MySql', '9008836782', '', 'http://rkmadhu.blogspot.com', ''),
('rkmadhu619@gmail.com', '0000-00-00', '', '', 0, '', '', '', '', '', '', '', '', ''),
('test@gmail.com', '1992-07-03', 'IND', 'KA', 560016, '', '', 'Apos', '', '', '', '', '', ' ');

-- --------------------------------------------------------

--
-- Table structure for table `rsm_test`
--

CREATE TABLE `rsm_test` (
  `test_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  `div_id` int(11) NOT NULL,
  `question` varchar(200) NOT NULL,
  `option1` varchar(100) NOT NULL,
  `option2` varchar(100) NOT NULL,
  `option3` varchar(100) NOT NULL,
  `option4` varchar(100) NOT NULL,
  `correct_option` varchar(100) NOT NULL,
  `entered_option` varchar(100) NOT NULL,
  `userid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsm_user`
--

CREATE TABLE `rsm_user` (
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `status` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `value` int(11) NOT NULL,
  `ActiveKey` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_user`
--

INSERT INTO `rsm_user` (`fname`, `lname`, `email`, `password`, `status`, `gender`, `value`, `ActiveKey`) VALUES
('madhu', 'sudan', 'madhu@gmail.com', '90973deb0c9a0aa1863669ebeaf23155', 1, 'Male', 64, 'asdfgh'),
('madhu', 'sudan', 'rkmadhu619@gmail.com', '90973deb0c9a0aa1863669ebeaf23155', 1, '', 128, ''),
('royal', 'admin', 'royal@royalsoftware.com', '7a50d66b23e07be28b766721a85fb00b', 1, 'Male', 256, ''),
('test', 'user', 'test@gmail.com', '8e16dbf6bd4ca855b60b64078c4ce9bd', 1, 'Male', 64, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rsm_category`
--
ALTER TABLE `rsm_category`
  ADD PRIMARY KEY (`cat_id`);

--
-- Indexes for table `rsm_div`
--
ALTER TABLE `rsm_div`
  ADD PRIMARY KEY (`div_id`);

--
-- Indexes for table `rsm_login`
--
ALTER TABLE `rsm_login`
  ADD PRIMARY KEY (`userName`,`Password`);

--
-- Indexes for table `rsm_payment`
--
ALTER TABLE `rsm_payment`
  ADD KEY `userName` (`userName`);

--
-- Indexes for table `rsm_profile`
--
ALTER TABLE `rsm_profile`
  ADD PRIMARY KEY (`userName`);

--
-- Indexes for table `rsm_test`
--
ALTER TABLE `rsm_test`
  ADD PRIMARY KEY (`test_id`,`cat_id`,`div_id`);

--
-- Indexes for table `rsm_user`
--
ALTER TABLE `rsm_user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rsm_div`
--
ALTER TABLE `rsm_div`
  MODIFY `div_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `rsm_payment`
--
ALTER TABLE `rsm_payment`
  ADD CONSTRAINT `rsm_payment_ibfk_1` FOREIGN KEY (`userName`) REFERENCES `rsm_user` (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
