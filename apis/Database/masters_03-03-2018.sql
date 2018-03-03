-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 03, 2018 at 04:25 PM
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
-- Table structure for table `rsm_login`
--

CREATE TABLE `rsm_login` (
  `userName` varchar(40) NOT NULL,
  `Password` varchar(40) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `rsm_payment`
--

CREATE TABLE `rsm_payment` (
  `userName` varchar(40) NOT NULL,
  `payDate` date NOT NULL,
  `amount` int(11) NOT NULL,
  `withdrawDate` date NOT NULL
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
  `webbsite` varchar(100) NOT NULL
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
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

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
-- Indexes for table `rsm_user`
--
ALTER TABLE `rsm_user`
  ADD PRIMARY KEY (`email`);

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
