-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 04, 2019 at 03:48 AM
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
  `designate` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `addinfo` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `ocrscan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `namef`, `datestamp`, `uploader`, `designate`, `category`, `addinfo`, `location`, `ocrscan`) VALUES
(3, '', '2019-02-24 16:30:42', 'admin', '', '', '', '6774-', ''),
(4, 'Jay-ar Dagooc', '2019-02-25 11:30:32', 'admin', 'Graduate', 'Transcripts', '2018', '19006-', ''),
(5, 'Jay-ar Dagooc', '2019-02-25 11:31:58', 'admin', 'Graduate', 'Transcripts', '2018', '16808-', ''),
(6, 'Jay-ar Dagooc', '2019-02-25 14:18:59', 'admin', 'Graduate', 'Transcripts', '2018', '19558-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(7, 'Jay-ar Dagooc', '2019-02-25 14:20:10', 'admin', 'Graduate', 'Form 137', '2018', '57275-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(8, 'Jay-ar Dagooc', '2019-02-25 14:47:26', 'admin', 'Graduate', 'Transcripts', '2018', '79252-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(9, 'Jay-ar Dagooc', '2019-02-25 14:48:31', 'admin', 'Graduate', 'Permanent', '2018', '17249-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(10, 'Sample', '2019-02-25 14:51:39', 'admin', 'Graduate', 'Transcripts', '2018', '42413-front.jpg', ''),
(11, 'Research Paper', '2019-02-25 14:52:39', 'admin', 'Research', 'My Files', 'Temporary', '95661-sds.doc', ''),
(12, 'Sample', '2019-02-27 13:00:09', 'admin', 'Hello', 'Carda', '2018', '15257-0b-eneq_a2ucvajhabe13suvxnza.jpg', ''),
(13, 'Jay-ar Dagooc', '2019-02-27 13:12:53', 'admin', 'New', 'Carda', '2017', '39822-0b-eneq_a2ucvajhabe13suvxnza.jpg', ''),
(14, 'Jay-ar Dagooc', '2019-02-27 13:13:32', 'admin', 'New', 'Carda', '2017', '36548-0b-eneq_a2ucvajhabe13suvxnza.jpg', ''),
(15, 'asdasd', '2019-02-27 13:13:59', 'admin', 'Graduate', 'Carda', '2018', '6239-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(16, 'Jay-ar Dagooc', '2019-02-27 13:15:27', 'admin', 'Graduate', 'Edits', '2018', '91526-fb_img_15075421253882989.jpg', ''),
(17, 'sdasd', '2019-02-27 13:16:18', 'admin', 'dsddsd', 'Permanent', 'dsdsd', '60357-banner.jpg', ''),
(18, 'ffsdf', '2019-02-27 13:18:11', 'admin', 'sdfsdf', 'Carda', 'sdfsdf', '83989-0b-eneq_a2ucvvxzcak1hwda2v1e-(2).jpg', ''),
(19, 'sdasd', '2019-02-27 13:19:40', 'admin', 'asdasd', 'Permanent', 'asdad', '75394-front.jpg', ''),
(20, 'Jay-ar Dagooc', '2019-02-27 13:20:24', 'admin', 'asdads', 'Transcripts', 'asdasd', '93759-fb_img_15153855744809486.jpg', ''),
(21, 'Jay-ar Dagooc', '2019-02-27 13:24:39', 'admin', 'asdasd', 'Transcripts', 'asdasd', '1640-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(22, 'Jay-ar Dagooc', '2019-02-27 13:25:50', 'admin', 'asdasd', 'Transcripts', 'asdasd', '40745-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(23, 'Jay-ar Dagooc', '2019-02-27 13:26:52', 'admin', 'asdasd', 'Transcripts', 'asdasd', '6300-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(24, 'gdfjs', '2019-02-27 13:36:21', 'admin', 'ahsgdasd', 'Transcripts', 'sdasd', '10898-dsc07337.jpg', ''),
(25, 'gdfjs', '2019-02-27 13:37:08', 'admin', 'ahsgdasd', 'Transcripts', 'sdasd', '98217-dsc07337.jpg', ''),
(26, 'ygtiuh', '2019-02-27 13:39:30', 'admin', 'asdasd', 'Transcripts', 'asdasd', '10176-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(27, 'hgdajs', '2019-02-27 13:50:35', 'admin', 'haygsd', 'Edits', 'asdasd', '57398-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(28, 'Research Paper', '2019-02-27 13:51:30', 'admin', 'Graduate', 'Papers', '2017', '75874-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(29, 'SOc. SCi', '2019-02-27 13:52:49', 'admin', 'Graduate', 'Reports', '2018', '2800-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(30, 'Jay-ar Dagooc', '2019-02-27 13:53:37', 'admin', 'sdfsf', 'Reports', '2018', '99009-fb_img_15075421253882989.jpg', ''),
(31, 'Jay-ar Dagooc', '2019-02-27 13:55:07', 'admin', 'asdasd', 'Edits', '2018', '68455-cs552_sw_design_specification_example.pdf', ''),
(32, 'Designations', '2019-02-27 13:56:43', 'admin', 'Graduate', 'Permanent', 'asdasd', '28097-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(33, 'asdasd', '2019-02-27 13:57:16', 'admin', 'Graduate', 'Transcripts', 'asdasd', '33804-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(34, 'juhsaid', '2019-02-27 13:57:47', 'admin', 'asdasd', 'Reports', 'asdad', '77386-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(35, 'Hello', '2019-02-27 14:04:27', 'admin', 'Graduate', 'Edits', '2018', '78975-0b-eneq_a2ucvcxhjmgy4adh4cmm.jpg', ''),
(36, 'Permanents', '2019-02-28 01:58:30', 'admin', 'hello', 'Carda', 'form', '32413-dsc00411.jpg', ''),
(37, 'Research Paper', '2019-02-28 02:55:17', 'admin', 'Under-Graduate', 'Permanent', '2019', '53968-dsc00410.jpg', ''),
(38, 'Jay-ar Dagooc', '2019-02-28 03:00:51', 'admin', 'Graduate', 'Transcripts', '2017', '33031-dsc00411.jpg', ''),
(39, 'test', '2019-02-28 03:23:29', 'admin', 'test', 'Tests', 'test', '48535-dsc00411.jpg', ''),
(40, 'Jay-ar Dagooc', '2019-02-28 11:18:24', 'admin', 'Graduate', 'Tests', '2017', '6048-dsc00433.jpg', ''),
(41, 'Grades', '2019-02-28 11:34:45', 'admin', 'Hello', 'Transcripts', 'hello', '8310-dsc00411.jpg', ''),
(42, 'Jayjay', '2019-02-28 11:43:00', 'admin', 'Under-Graduate', 'Edits', 'something', '48280-dsc00410.jpg', ''),
(43, 'Jayjay', '2019-02-28 11:44:27', 'admin', 'Under-Graduate', 'Edits', 'something', '23910-dsc00410.jpg', ''),
(44, 'Hello', '2019-02-28 11:45:00', 'admin', 'Hello', 'Transcripts', 'it is me', '25003-dsc00410.jpg', ''),
(45, 'Hello', '2019-02-28 11:45:36', 'admin', 'Hello', 'Transcripts', 'it is me', '76474-dsc00410.jpg', ''),
(46, 'Hello', '2019-02-28 11:45:56', 'admin', 'it is me', 'Transcripts', 'hello', '26421-dsc00410.jpg', ''),
(47, 'Hello', '2019-02-28 12:08:07', 'admin', 'it is me', 'Transcripts', 'hello', '2293-dsc00410.jpg', ''),
(48, 'Jay-ar Dagooc', '2019-02-28 12:08:28', 'admin', 'Graduate', 'Transcripts', '2018', '9682-dsc00416.jpg', ''),
(49, 'Jay-ar Dagooc', '2019-02-28 12:09:34', 'admin', 'Graduate', 'Transcripts', '2018', '42955-dsc00416.jpg', ''),
(50, 'Jay-ar Dagooc', '2019-02-28 12:09:56', 'admin', 'Graduate', 'Transcripts', '2018', '70442-dsc00416.jpg', ''),
(51, 'Hello', '2019-02-28 12:10:28', 'admin', 'hello', 'Transcripts', 'Hello', '57974-dsc00411.jpg', ''),
(52, 'Hello', '2019-02-28 12:11:19', 'admin', 'hello', 'Transcripts', 'Hello', '19591-dsc00411.jpg', ''),
(53, 'Hello', '2019-02-28 12:11:38', 'admin', 'hello', 'Transcripts', 'Hello', '93806-dsc00411.jpg', ''),
(54, 'Hello', '2019-02-28 12:11:55', 'admin', 'she', 'Transcripts', 'sha', '85381-dsc00411.jpg', ''),
(55, 'Hello', '2019-02-28 12:13:16', 'admin', 'she', 'Transcripts', 'sha', '16354-dsc00411.jpg', ''),
(56, 'she', '2019-02-28 12:13:34', 'admin', 'is', 'Transcripts', 'the', '4129-dsc00410.jpg', ''),
(57, 'she', '2019-02-28 12:15:03', 'admin', 'is', 'Transcripts', 'the', '78780-dsc00410.jpg', ''),
(58, 'jhugyfkudj', '2019-02-28 12:15:18', 'admin', 'hdugdsfs', 'Transcripts', 'yusdgfisdf', '94642-dsc00411.jpg', ''),
(59, 'jhugyfkudj', '2019-02-28 12:16:34', 'admin', 'hdugdsfs', 'Transcripts', 'yusdgfisdf', '78893-dsc00411.jpg', ''),
(60, 'Hello', '2019-02-28 12:16:50', 'admin', 'hello', 'Transcripts', 'dha', '80557-dsc00411.jpg', ''),
(61, 'Hello', '2019-02-28 12:17:28', 'admin', 'hello', 'Transcripts', 'dha', '64696-dsc00411.jpg', ''),
(62, 'gytfjh', '2019-02-28 12:17:41', 'admin', 'gyfhj', 'Transcripts', 'jhygfjh', '15121-dsc00431.jpg', ''),
(63, 'gytfjh', '2019-02-28 12:19:12', 'admin', 'gyfhj', 'Transcripts', 'jhygfjh', '41835-dsc00431.jpg', ''),
(64, 'hgeiu', '2019-02-28 12:19:38', 'admin', 'hayutsdr', 'Edits', 'ajsuydt', '72077-dsc00427.jpg', ''),
(65, 'hgeiu', '2019-02-28 12:20:18', 'admin', 'hayutsdr', 'Edits', 'ajsuydt', '31476-dsc00427.jpg', ''),
(66, 'shdtyusd', '2019-02-28 12:20:32', 'admin', 'sfsdf', 'Transcripts', 'sdfsdf', '33949-dsc00432.jpg', ''),
(67, 'ahstd', '2019-02-28 12:21:06', 'admin', 'asdasdasdas', 'Edits', 'asdasd', '22914-dsc00426.jpg', ''),
(68, 'ahstd', '2019-02-28 12:21:52', 'admin', 'asdasdasdas', 'Edits', 'asdasd', '20346-dsc00426.jpg', ''),
(69, 'gfuyg', '2019-02-28 12:22:05', 'admin', 'yugjh', 'Transcripts', 'yty', '39943-dsc00411.jpg', ''),
(70, 'gfjsdf', '2019-02-28 12:23:11', 'admin', 'dfsdfsf', 'Carda', 'sdfsdf', '84738-dsc00411.jpg', ''),
(71, 'gasdfdghsf', '2019-02-28 12:24:56', 'admin', 'sdfsdf', 'Transcripts', 'sdfsdf', '85667-dsc00454.jpg', ''),
(72, 'test', '2019-02-28 12:25:50', 'admin', 'test', 'Transcripts', 'testing', '94335-dsc00411.jpg', ''),
(73, 'gfjsdf', '2019-02-28 12:27:03', 'admin', 'dfsdfsf', 'Carda', 'sdfsdf', '78816-dsc00411.jpg', ''),
(74, 'gfjsdf', '2019-02-28 12:27:58', 'admin', 'dfsdfsf', 'Carda', 'sdfsdf', '45706-dsc00411.jpg', ''),
(75, 'jhgashj', '2019-02-28 12:32:21', 'admin', 'asdad', 'Transcripts', 'asdasd', '14127-dsc00411.jpg', ''),
(76, 'jhgashj', '2019-02-28 12:33:06', 'admin', 'asdad', 'Transcripts', 'asdasd', '63915-dsc00411.jpg', ''),
(77, 'jhgashj', '2019-02-28 12:33:11', 'admin', 'asdad', 'Transcripts', 'asdasd', '4780-dsc00411.jpg', ''),
(78, 'yuugjshda', '2019-02-28 12:33:47', 'admin', 'asdasd', 'Form 137', 'asdasd', '7666-dsc00411.jpg', ''),
(79, 'gjsdasd', '2019-03-01 10:37:07', 'admin', 'asdasd', '\"+category+\"', 'asdasd', '64578-dsc00415.jpg', ''),
(80, 'gjsdasd', '2019-03-01 10:37:27', 'admin', 'asdasd', '\"+category+\"', 'asdasd', '71288-dsc00415.jpg', ''),
(81, 'gjsdasd', '2019-03-01 10:37:38', 'admin', 'asdasd', '\"+category+\"', 'asdasd', '50883-dsc00415.jpg', ''),
(82, 'gjsdasd', '2019-03-01 10:42:07', 'admin', 'asdasd', '\"+category+\"', 'asdasd', '22462-dsc00421.jpg', ''),
(83, 'gjsdasd', '2019-03-01 10:42:07', 'admin', 'asdasd', '\"+category+\"', 'asdasd', '14581-dsc00421.jpg', ''),
(84, 'asdasd', '2019-03-01 21:30:45', 'admin', 'asdasd', 'My Files', 'asdasd', '26249-dsc00416.jpg', ''),
(85, 'test', '2019-03-01 21:31:50', 'admin', 'asdastset', 'My Files', 'asdasdtset', '5657-dsc00416.jpg', ''),
(86, 'testhghg', '2019-03-01 21:33:52', 'admin', 'asdastset', 'My Files', 'asdasdtset', '7047-dsc00416.jpg', ''),
(87, 'sadasd', '2019-03-01 21:36:30', 'admin', 'asdasd', 'Reports', 'adsasd', '14133-dsc00410.jpg', ''),
(88, 'asdasd', '2019-03-01 21:37:41', 'admin', 'asd', 'Permanent', 'asdsd', '83886-dsc00411.jpg', ''),
(89, 'uysdya', '2019-03-03 01:01:15', 'admin', 'adad', 'Archive', 'asdad', '15655-dsc00417.jpg', ''),
(90, 'Sheet1', '2019-03-03 13:17:42', 'admin', 'Evaluate', 'Sheets', '2019', '31782-dsc00411.jpg', '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

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
