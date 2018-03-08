-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 08, 2018 at 07:59 AM
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
-- Table structure for table `rsm_user`
--

CREATE TABLE `rsm_user` (
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `status` int(11) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `value` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rsm_user`
--

INSERT INTO `rsm_user` (`fname`, `lname`, `email`, `password`, `status`, `gender`, `value`) VALUES
('royal', 'admin', 'royal@royalsoftware.com', '7a50d66b23e07be28b766721a85fb00b', 0, 'Male', 256),
('test', 'user', 'test@gmail.com', '8e16dbf6bd4ca855b60b64078c4ce9bd', 0, 'Male', 64);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rsm_user`
--
ALTER TABLE `rsm_user`
  ADD PRIMARY KEY (`email`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
