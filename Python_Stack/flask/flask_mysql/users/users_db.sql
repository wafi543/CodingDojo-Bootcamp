-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 09, 2019 at 08:42 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `flask_friends`
--
CREATE DATABASE IF NOT EXISTS `flask_friends` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `flask_friends`;

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `friends`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `occupation`, `created_at`, `updated_at`) VALUES
(1, 'wafi', NULL, NULL, NULL, NULL),
(2, 'Daniel', 'Oostra', 'tmp', '2019-09-09 14:17:29.000000', '2019-09-09 14:17:29.000000');

--
-- Indexes for table `friends`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--