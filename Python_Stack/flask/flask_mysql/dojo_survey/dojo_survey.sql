-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 10, 2019 at 11:46 AM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `dojo_survey`
--

-- --------------------------------------------------------

--
-- Table structure for table `surveys`
--

CREATE TABLE `surveys` (
  `id` int(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `language` varchar(50) DEFAULT NULL,
  `comment` varchar(125) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `surveys`
--

INSERT INTO `surveys` (`id`, `name`, `location`, `language`, `comment`) VALUES
(1, 'Wafi', 'Saudi Arabia', 'Swift', 'He there! I am Wafi'),
(2, 'Wafi', 'Saudi Arabia', 'Swift', 'Hi'),
(3, 'Wafi', 'Saudi Arabia', 'Swift', 'Hi'),
(4, 'Wafi', 'Saudi Arabia', 'Swift', 'Hi'),
(5, '', 'San Jose', 'Python', ''),
(6, '', 'San Jose', 'Python', ''),
(7, 'Wafi', 'San Jose', 'Python', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `surveys`
--
ALTER TABLE `surveys`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `surveys`
--
ALTER TABLE `surveys`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;