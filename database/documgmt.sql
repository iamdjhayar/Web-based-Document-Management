-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 27, 2019 at 07:57 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `documgmt`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `catname` varchar(50) NOT NULL,
  `author` varchar(100) NOT NULL,
  `viewtype` varchar(25) NOT NULL,
  `cattimestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `catname`, `author`, `viewtype`, `cattimestamp`) VALUES
(34, 'Transcripts', '', '', '2019-02-20 12:15:25'),
(35, 'Form 137', '', '', '2019-02-20 12:16:17'),
(36, 'Carda', '', '', '2019-02-20 12:17:06'),
(37, 'Edits', '', '', '2019-02-20 12:18:51'),
(38, 'Permanent', '', '', '2019-02-20 12:19:44'),
(39, 'Reports', '', '', '2019-02-24 01:49:38'),
(40, 'Papers', '', '', '2019-02-24 05:41:32'),
(41, 'My Files', '', '', '2019-02-24 15:37:50'),
(42, 'Tests', '', '', '2019-02-28 03:23:01'),
(43, 'Sheets', '', '', '2019-02-28 13:35:23'),
(44, 'Archive', '', '', '2019-03-01 01:25:30');

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `namef` varchar(50) NOT NULL,
  `datestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `uploader` varchar(50) NOT NULL,
  `location` varchar(100) NOT NULL,
  `size` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `ocrscan` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `namef`, `datestamp`, `uploader`, `location`, `size`, `status`, `ocrscan`) VALUES
(1, 'angel_new.jpg', '2019-06-23 13:54:04', 'admin', 'my files', '1.36', 'active', ''),
(2, 'ginalyn.jpg', '2019-06-23 14:02:47', 'admin', 'my files', '1.28', 'active', ''),
(3, 'ginalyn.jpg', '2019-06-23 14:03:19', 'admin', 'my files', '1.28', 'active', ''),
(4, 'rea-j..jpg', '2019-06-23 14:03:28', 'admin', 'my files', '1.27', 'active', ''),
(5, 'c6c0a1dcffb3e45b7b8ac6944b6ca6ac.png', '2019-07-10 04:34:12', 'admin', 'my files', '0.23', 'active', ''),
(6, 'scan_20190630.jpg', '2019-07-10 04:37:21', 'admin', 'my files', '1.07', 'active', ''),
(7, 'img_20190311_141458.jpg', '2019-07-14 13:22:37', 'admin', 'my files', '0.00', 'recycle_bin', ''),
(8, 'img_20190311_141510.jpg', '2019-07-14 13:22:37', 'admin', 'my files', '0.00', 'recycle_bin', ''),
(9, 'img_20190311_141518.jpg', '2019-07-14 13:22:37', 'admin', 'my files', '0.00', 'recycle_bin', '');

-- --------------------------------------------------------

--
-- Table structure for table `folder`
--

CREATE TABLE `folder` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `text` varchar(200) NOT NULL,
  `parent_id` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `folder`
--

INSERT INTO `folder` (`id`, `name`, `text`, `parent_id`) VALUES
(1, 'root directory', 'root directory', ''),
(3, 'my files', 'my files', '1'),
(4, 'database', 'database', '3');

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `id` int(11) NOT NULL,
  `details` varchar(100) NOT NULL,
  `datestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `accounttype` varchar(15) NOT NULL,
  `accountstatus` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `accounttype`, `accountstatus`) VALUES
(1, 'admin', 'admin', 'admin', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `folder`
--
ALTER TABLE `folder`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `folder`
--
ALTER TABLE `folder`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
