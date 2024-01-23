-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2024 at 08:51 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eksamens`
--

-- --------------------------------------------------------

--
-- Table structure for table `lietotaji`
--

CREATE TABLE `lietotaji` (
  `id` int(11) NOT NULL,
  `vards` varchar(30) NOT NULL,
  `e-pasts` text NOT NULL,
  `zinojums` text NOT NULL,
  `laiks` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lietotaji`
--

INSERT INTO `lietotaji` (`id`, `vards`, `e-pasts`, `zinojums`, `laiks`) VALUES
(1, 'asdasd', 'asdasd@gmail.com', 'asdasdsad', '2024-01-23 07:32:40'),
(2, 'asd', 'asdasd@gmail.com', 'dsswdw', '2024-01-23 07:32:40'),
(3, 'asdsad', 'yeiwqe@gmail.com', 'uwadssdad', '2024-01-23 07:32:40'),
(4, 'Roberts', 'rtasd@gmail.com', 'halllloooo', '2024-01-23 07:34:41'),
(5, 'niks', 'niks@gmail.com', 'vaig paest', '2024-01-23 07:38:53'),
(6, 'uols', 'niks@gmail.com', 'vaig paest', '2024-01-23 07:39:03'),
(7, 'uols', 'niks@gmail.com', 'idansd', '2024-01-23 07:39:17'),
(8, 'toms', 'ginters@gmail.com', 'cau', '2024-01-23 07:48:16'),
(9, 'egons', 'tests@gmail.com', 'sadasd', '2024-01-23 07:48:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lietotaji`
--
ALTER TABLE `lietotaji`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lietotaji`
--
ALTER TABLE `lietotaji`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
