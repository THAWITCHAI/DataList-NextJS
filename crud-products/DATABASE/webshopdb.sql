-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2024 at 03:08 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webshopdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `born` varchar(200) NOT NULL,
  `phoneNumber` varchar(100) NOT NULL,
  `position` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `name`, `email`, `password`, `born`, `phoneNumber`, `position`) VALUES
(1, 'Thawitchai Boonsong', 'Thawitchai@gmail.com', '13495000', '12/06/2545', '0652974104', 'เจ้าของบริษัท'),
(2, 'Phatcharaporn phahyat', 'phatcharaporn@gmail.com', '13082545', '13/08/2545', '0910828325', 'แคชเชียร์'),
(3, 'Thammanoon Chakansin', 'thammanoon@gmail.com', '64122420209', '27/07/2545', '-', 'พนักงานทั่วไป'),
(9, 'Thawitchai Boonsong', 'Thawitchai285@gmail.com', '1111', '2024-07-22', '065-2974-104', 'MEAT'),
(10, 'Pongsathon Namsaen ', 'Pongsathon@gmail.com', '13495000624', '2002-07-20', '065-191-1669', 'มือขวา');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `weigth` varchar(100) NOT NULL,
  `mfg` varchar(100) NOT NULL,
  `exp` varchar(100) NOT NULL,
  `cost` int(100) NOT NULL,
  `sell` int(100) NOT NULL,
  `qty` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `weigth`, `mfg`, `exp`, `cost`, `sell`, `qty`) VALUES
('8462154952136', 'ME O', '1.1', '05/06/64', '12/07/66', 100, 150, 20),
('8854613257012', 'Wiskus', '1.2', '12/08/66', '26/12/67', 190, 250, 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
