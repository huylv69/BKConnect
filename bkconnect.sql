-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th12 13, 2017 lúc 11:19 AM
-- Phiên bản máy phục vụ: 10.1.28-MariaDB
-- Phiên bản PHP: 7.0.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `bkconnect`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `AccessTokenAdmin`
--

CREATE TABLE `AccessTokenAdmin` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `AccessTokenAdmin`
--

INSERT INTO `AccessTokenAdmin` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('dvM8S36V0uKnE5M8BDaTOaU8N6ZR094Z7ODbH5PlqurrTDjSIpi6O7RtGUZCaf6d', 1209600, NULL, '2017-12-09 16:36:47', 7),
('EdUM5M6A0zXDd22ZGFccYhQmkYwtRgocaOSUteuDwMQbxisy87VutFaxYeixDGR6', 1209600, NULL, '2017-12-09 16:26:07', 7),
('F9ePvry2Gdw5Yn6PhW4Olsvp8x4GgYv3I8wKHryxCYILLcuD8ZxWCyVpAscAtZpV', 1209600, NULL, '2017-12-09 16:21:24', 7),
('p7Cx0qh0ZeLYIsD19UW5kthP8Am9dTWsMLYeOUWiSMRKUakiEKdp6YtSgIJVTjbI', 1209600, NULL, '2017-12-09 16:45:00', 7),
('UeiMmpFY4cPIHQs2BZ71CLGdhM8sKioOU9xCZKOJK2CHyDirPEFWuhl78O1kQMgO', 1209600, NULL, '2017-12-10 13:48:10', 7);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `AccessTokenCompany`
--

CREATE TABLE `AccessTokenCompany` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `AccessTokenCompany`
--

INSERT INTO `AccessTokenCompany` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('EdRNSFX5d1aRLMPBDtANsu4cMkeDsmzvkdnk5QhBqZlWrLhnpc3QEQTZkmFMnAGM', 1209600, NULL, '2017-12-09 17:39:36', 16),
('HosCRh2BXmtdVko6yr250AqLxoZsjCce5E7ljf3RZHdbFVT3dJN0z6chdru3MowC', 1209600, NULL, '2017-12-11 07:41:55', 25),
('hVCnRInemlnRDsuNWGOFdxp3xOJ53BpiDaRrgQKePzXJCwwrfPjU3IlcxqlpAslj', 1209600, NULL, '2017-12-09 16:51:27', 21),
('JXmDZzBRARspHVFeQOCfSYyhbudBiKiBimn7b4TXlE8OILsZGhk3R4eGZtyvAqfa', 1209600, NULL, '2017-12-09 18:11:07', 18),
('khOBAwl4at0tcxADAZT4PTX2H2fZZCsQjgXfQRrznrNVf2ZtLk2Yt8e1okAs2iqB', 1209600, NULL, '2017-12-11 07:43:02', 25),
('nBnx2wj5cRHaxWGN6fuLgAaRr8nnV9VuBYF0BycqfgE6Rpjbp9cM93bD4rZSEZ3j', 1209600, NULL, '2017-12-09 17:57:20', 17),
('PnuCNNSo3GTlSPL56miqkqrxHfTmDhwhYxwWEKTEizGBRxEmIoVLCzoD9n8gUTOd', 1209600, NULL, '2017-12-11 02:52:49', 24),
('To9RPEMStRkxuW85at5ps8DEQIo0EY2zMMw5SqYMQ9rHt7UWWVZBBdaEXPlkqkqB', 1209600, NULL, '2017-12-11 07:56:42', 25),
('TSFPytRURq5MTULoikvMZEiJtn8HETd2BHcIXrgvHYJgvKklMrrGyXoCVMEzFpVu', 1209600, NULL, '2017-12-09 16:31:35', 20),
('uBnDLViAaXZQ8R3ECBt1lkKOBwcUYJ4dWGnxxCIrRHq5Y8SLZejb70LxJ2rQQtVG', 1209600, NULL, '2017-12-09 16:51:28', 21),
('xBtsyVdq3rjeanyj8MN5yCsG7TAdwkR7G9ziv9w9wX9xne1hvgqkz2CAshc9Iybf', 1209600, NULL, '2017-12-09 16:38:54', 22),
('ZfByCpu4w4mFY0eFsifCw5fQygkSwtlU6NcDup4EMdtiKq0AvlLUgygAkEVhLnL5', 1209600, NULL, '2017-12-09 16:51:27', 24);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `AccessTokenStudent`
--

CREATE TABLE `AccessTokenStudent` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `created` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `AccessTokenStudent`
--

INSERT INTO `AccessTokenStudent` (`id`, `ttl`, `scopes`, `created`, `userId`) VALUES
('0CD2yjA0l1ttVyPzwl9u27wqrZJVJfESFEEfWJJm4ZA40mGZV7BX62PZ1TrGLaMg', 1209600, NULL, '2017-12-11 08:17:24', 33),
('0OmxKmjHtVSJZGITdeZqm5WDvtpz0YC47P0YpKtUDw7phjvhyCwdMig88gMPtX3m', 1209600, NULL, '2017-12-11 08:19:00', 31),
('1sYseieH2COgctMgs46yk8ghLLYzxF5SR6sYXnymDHHqRCgSOf9sViEmDLcU4CtB', 1209600, NULL, '2017-12-09 18:18:33', 30),
('2ycO4hLlH4lRzxxDT40xVyFj47aGMqaLiisfMCu1ca9JAvj25Bmt5Df2GYfODCSK', 1209600, NULL, '2017-12-11 06:27:47', 31),
('3uZHBdndvbqaasquSwD7ORHeiKgyddcCXTPdAONSNmD77CDXxQxUsC6vlZE9uD84', 1209600, NULL, '2017-12-13 06:57:16', 31),
('aIVfG8FcWbXq2cIBLSoBVUfwSC2nCUELdTs12UnFh3mfI51m4o92N5IXnogAuLtP', 1209600, NULL, '2017-12-09 16:25:29', 31),
('hbAHMtEsUwWIEBGyQ2v89IFVHQGY1o19iKAIN9jsIZUkqyb2cSbWbYJf9hwCOOAu', 1209600, NULL, '2017-12-11 06:38:37', 31),
('hBnHukHe9M7mKZYN3Cq5HiGlapotfzhQt94GOqUa38rNNVaEPY8Nrt3OkFFS06ED', 1209600, NULL, '2017-12-11 06:33:35', 31),
('HjzHenyHVZXLorQTh1eDDUhdSHa1cXxo0W8pjMn4e0Vu8npNe7MFJFSYuPkALaa5', 1209600, NULL, '2017-12-09 18:15:50', 30),
('JH5MDRMhcnxqkMtRlubUuGOTPqIhwo3E0CmRsGRc6ZDDIiKdrOj8XvzJdBsSBto2', 1209600, NULL, '2017-12-11 07:50:55', 31),
('KA9OSOm4JxgNf1Khi9nMJKaAQ0PaMUDwJ3utC1dCApiuL2X1OsrB0D5c46LkdZfD', 1209600, NULL, '2017-12-11 06:43:46', 31),
('Lkz60uzKWgraD5FnbNJXNaCaSZmA9NpswC3TxdbtK4Ig956459gfRwvlXBpHoXik', 1209600, NULL, '2017-12-12 07:36:32', 31),
('o2YVH4WWEjUGn25BnACu0kYk0bIW2wqQxbnanFlFZBVHefbcNqQVfQ9JTKVvLYQv', 1209600, NULL, '2017-12-10 14:15:10', 32),
('q3CPTYZHirKsZtjjhpNJqrL0BIVeqhN0xpUSbmRy0Op2R0hEaikJM9pXlTWXD2z9', 1209600, NULL, '2017-12-11 06:30:56', 31),
('t9nb8xiU8NFfl8owiWXLWqCcdXOo87md47VAfYUXDltAQiueitRl9ihEFbThvlAJ', 1209600, NULL, '2017-12-11 06:56:42', 31),
('Wu0cGp00LKc98ymdFQBjFGfzvY7tcPktLqPoku8sUldx7LgAXvsWs11wPSWGZyjB', 1209600, NULL, '2017-12-11 04:17:27', 31),
('zqZHWK8JoabkFLHOIBV57BCFObXZlKwfhe5gHBBNdkufUHE4MV8WrNyXV9MPM7Ae', 1209600, NULL, '2017-12-11 08:43:05', 31);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ACL`
--

CREATE TABLE `ACL` (
  `id` int(11) NOT NULL,
  `model` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `property` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `accessType` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `permission` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `principalType` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `principalId` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `admin`
--

CREATE TABLE `admin` (
  `idadmin` int(11) NOT NULL,
  `username` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `admin`
--

INSERT INTO `admin` (`idadmin`, `username`, `password`) VALUES
(7, 'huylv', '$2a$10$QoXrkrb5pqVYGbPNUODuKe1j5z1TzXKVQZJMx2qcrYYGa6Fu11kUm');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `career`
--

CREATE TABLE `career` (
  `idcareer` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `career`
--

INSERT INTO `career` (`idcareer`, `name`) VALUES
(1, 'Cơ khí'),
(2, 'Công nghệ thông tin'),
(3, 'Dệt may'),
(4, 'Điện / Điện tử '),
(5, 'Công nghệ sinh học'),
(6, 'Kế toán'),
(7, 'Kiểm toán'),
(8, 'Môi trường'),
(9, 'Sales'),
(10, 'Tài chính'),
(11, 'Tư vấn viên'),
(12, 'Xây dựng'),
(13, 'Cơ điện tử'),
(14, 'Nhiệt-Lạnh'),
(15, 'Kỹ thuật ô tô'),
(16, 'Kỹ thuật hàng không'),
(17, 'Kỹ thuật tàu thủy'),
(18, 'Chế tạo máy'),
(19, 'Kỹ thuật vật liệu'),
(20, 'Toán-Tin'),
(21, 'Kỹ thuật hóa học'),
(22, 'Kỹ thuật thực phẩm'),
(23, 'Kỹ thuật in'),
(24, 'Kỹ thuật dệt'),
(25, 'Công nghệ may'),
(26, 'Sư phạm kĩ thuật công nghiệp'),
(27, 'Vật lý kĩ thuật'),
(28, 'Kỹ thuật hạt nhân'),
(29, 'Kinh tế công nghiệp'),
(30, 'Quản lý công nghiệp'),
(31, 'Quản lý kinh doanh');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `city`
--

CREATE TABLE `city` (
  `idcity` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `city`
--

INSERT INTO `city` (`idcity`, `name`) VALUES
(1, 'Hà Nội'),
(2, 'TP. Hồ Chí Minh'),
(3, 'An Giang'),
(4, 'Bà Rịa - Vũng Tàu'),
(5, 'Bắc Giang'),
(6, 'Bắc Kan'),
(7, 'Bạc Liêu'),
(8, 'Bắc Ninh'),
(9, 'Bến Tre'),
(10, 'Bình Định'),
(11, 'Bình Dương'),
(12, 'Bình Phước'),
(13, 'Bình Thuận'),
(14, 'Cà Mau'),
(15, 'Cao Bằng'),
(16, 'Đắk Lắk'),
(17, 'Đắk Nông'),
(18, 'Điện Biên'),
(19, 'Đồng Nai'),
(20, 'Đồng Tháp'),
(21, 'Gia Lai'),
(22, 'Hà Giang'),
(23, 'Hà Nam'),
(24, 'Hà Tĩnh'),
(25, 'Hải Dương'),
(26, 'Hậu Giang'),
(27, 'Hòa Bình'),
(28, 'Hưng Yên'),
(29, 'Khánh Hòa'),
(30, 'Kiên Giang'),
(31, 'Kon Tum'),
(32, 'Lai Châu'),
(33, 'Lâm Đồng'),
(34, 'Lạng Sơn'),
(35, 'Lào Cai'),
(36, 'Long An'),
(37, 'Nam Định'),
(38, 'Nghệ An'),
(39, 'Ninh Bình'),
(40, 'Ninh Thuận'),
(41, 'Phú Thọ '),
(42, 'Quảng Bình'),
(43, 'Quảng Nam'),
(44, 'Quảng Ngãi'),
(45, 'Quảng Ninh'),
(46, 'Quảng Trị'),
(47, 'Sóc Trăng'),
(48, 'Sơn La'),
(49, 'Tây Linh'),
(50, 'Thái Bình'),
(51, 'Thái Nguyễn'),
(52, 'Thanh Hóa'),
(53, 'Thừ Thiên Huế'),
(54, 'Tiền Giang'),
(55, 'Trà Vinh'),
(56, 'Tuyên Quang'),
(57, 'Vĩnh Long'),
(58, 'Vĩnh Phúc'),
(59, 'Yên Bái'),
(60, 'Phú Yên'),
(61, 'Cần Thơ'),
(62, 'Đà Nẵng '),
(63, 'Hải Phòng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `company`
--

CREATE TABLE `company` (
  `idcompany` int(11) NOT NULL,
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `activated` tinyint(1) DEFAULT '0',
  `block` tinyint(1) DEFAULT '0',
  `name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8_unicode_ci,
  `benefits` text COLLATE utf8_unicode_ci,
  `goal` text COLLATE utf8_unicode_ci,
  `mission` text COLLATE utf8_unicode_ci,
  `logo` text COLLATE utf8_unicode_ci,
  `cover` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `website` varchar(512) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'http://'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `company`
--

INSERT INTO `company` (`idcompany`, `email`, `password`, `activated`, `block`, `name`, `address`, `about`, `benefits`, `goal`, `mission`, `logo`, `cover`, `created_at`, `website`) VALUES
(16, 'bksmart@gmail.com', '$2a$10$cBCskh/jaDaK6Z3joPA3L.zZcuxzrGfZGc0zVELT3uXxldwbm9SLu', 1, 0, 'Giải pháp công nghệ Việt Nam BKsmart', 'Phường Trương Định, quận Hai Bà Trưng, Hà Nội', '\"Đem lại giải pháp công nghệ cao cho mọi lĩnh vực.\"', '\"Phúc lợi xã hội đầy đủ.\"', '\"Đạt tổng doanh thu 1 tỷ USD trong năm 2030.\"', '\"Đem lại các giải pháp thông minh tới từng cánh đồng.\"', '/api/containers/logo/download/1512841440459_1_DcHlT-ImdvYaJZL7LWDUUA.jpeg', '/api/containers/cover/download/1512841442281_SMART logo 1.png', '2017-12-09 16:13:32', 'http://bksmart.vn'),
(17, 'vncorp@gmail.com', '$2a$10$2bOxCK8CdxrGk1/PpOGedebkKTOJCa4tYExMX.jy.l6UCk4hEqXfm', 1, 0, 'VNcorp', 'Phường Trương Định, quận Hai Bà Trưng, Hà Nội', '\"Tập đoàn VNcorp được thành lập ngày 10/12/2020. Là công ty cung cấp các giải pháp thông minh cho những lĩnh vực nông nghiệp. Founder là anh Phạm Hữu Quang, nguyên là cổ đông lớn tại MS.\"', '\"Phúc lợi xã hội đầy đủ.\"', '\"Đạt mức doanh thu 1 tỷ USD trong năm 2030.\"', '\"Đem lại hạnh phúc tới cho mọi nhà.\"', '/api/containers/logo/download/1512842513118_a-dd2e7-crop1397639880913p.jpg', '/api/containers/cover/download/1512842513906_s-dd2e7.png', '2017-12-09 16:18:54', 'http://vncorp.vn'),
(18, 'vnnews@gmail.com', '$2a$10$hhvhRxwLoTSWXi5mJ5zuZ.eEaWbj7It1rCFiaCakkBp2T.n0lahba', 1, 0, 'Vnnews', NULL, '\"Công ty VNnews được thành lập ngày 10/12/2022. Là công ty con của tập đoàn VNcorp có nhiệm vụ thu thâp và xác thực tin tức từ các trang báo điện tử có uy tín. Founder là anh Phạm Hữu Quang, nguyên là cổ đông lớn tại MS.\"', 'null', 'null', 'null', NULL, NULL, '2017-12-09 16:23:48', 'http://'),
(19, 'invest@bimvietnam.com', '$2a$10$LMWGwUFy0/IMGVNGyNfHduYLrNdetmjbJaUZ6fTKa0QZKZPyFfPoC', 1, 0, 'BIM Group', NULL, '\"Hiện nay, BIM đang đầu tư và phát triển trong các lĩnh vực chính như: • Lương thực và thực phẩm: nuôi trồng và sản xuất thủy sản, sản xuất và chế biến muối, và sản xuất gạo. • Đầu tư và phát triển bất động sản. • Thương mại dịch vụ.\"', 'null', 'null', 'null', NULL, NULL, '2017-12-09 16:25:55', 'http://'),
(20, 'vnshop@gmail.com', '$2a$10$KHciMcn5XT2EttpYyljRwe.AGOBYnDL/FUYFYW49UgbK0zP/Y2lS.', 1, 0, 'Vnshop', 'Phường Trương Định, quận Hai Bà Trưng, Hà Nội', '\"Công ty VNshop được thành lập ngày 10/12/2025. Là công ty con của tập đoàn VNcorp đem lại giải pháp thương mại điện tử hàng đầu khu vực châu Á- Thái Bình Dương. Dù mới thành lập không lâu nhưng công ty đã nhanh chóng nuốt chọn các ông lớn trong lĩnh vực này như Alibaba, Shopee, Adayroi, Lazada,... Founder là anh Phạm Hữu Quang, nguyên là cổ đông lớn tại MS.\"', '\"Lương 3000$. Phúc lợi xã hội đầy đủ.\"', '\"Đạt mức tổng doanh thu là 1 tỷ USD trong năm 2025.\"', '\"Đem lại giá trị lớn cho cộng đồng.\"', '/api/containers/logo/download/1512837621123_download.jpeg', '/api/containers/cover/download/1512837626161_06-thiet-ke-logo-website-thuong-mai-cua-hang-ba-le.jpg', '2017-12-09 16:27:13', 'http://vnshop'),
(21, 'shiftasia@gmail.com', '$2a$10$I3kVjEj.Qqa6hO/b8CrLgudKZpKPGZUpjb1kgE8.1mFVL2B8yYIJ6', 1, 0, 'SHIFT ASIA', 'L18-15 & L18-14 72 Lê Thánh Tôn, Phường Bến Nghé Quận 1, TPHCM', '\"SHIFT ASIA là công ty có vốn 100% thuộc tập đoàn SHIFT, tập đoàn công nghệ thông tin đi đầu trong lĩnh vực Software Testing tại Nhật Bản.\\n\\nVới tham vọng trở thành công ty hàng đầu trong lĩnh vực kiểm thử phần mềm, SHIFT đã chọn Việt Nam, quốc gia có ngành CNTT phát triển mạnh mẽ, là điểm đến đầu tiên trong chặng đường chinh phục Châu Á và thế giới.\"', '\"<p><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: center;\\\">-Đào tạo cùng chuyên gia Nhật Bản</span></p><p><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: center;\\\">-</span><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: center;\\\">Lương, thưởng hấp dẫn theo năng lực</span></p><p><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: center;\\\">-</span><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: center;\\\">Cơ hội làm việc tại Nhật Bản</span></p>\"', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px;\\\">Tại Việt Nam, SHIFT muốn kết hợp giữa Chất lượng Nhật Bản và sức mạnh Châu Á để tạo ra SHIFT ASIA, nơi kết hợp công nghệ tiên tiến nhất của SHIFT &nbsp; &nbsp; &nbsp; &nbsp;Nhật Bản và sức trẻ cùng năng lực cao của các kỹ sư CNTT hàng đầu tại Việt Nam.&nbsp;</span>\"', '\"<p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">\\\"No SHIFT ASIA, no shift to the next paradigm!</p><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">Chúng tôi nâng tầm Châu Á lên một đẳng cấp chất lượng mới.</p><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">Và Châu Á sẽ nâng tầm thế giới lên một đẳng cấp chất lượng mới.\\\"</p>\"', '/api/containers/logo/download/1512838796200_Shift-Logo.png', '/api/containers/cover/download/1512838800257_SHIFTphoto1.jpg', '2017-12-09 16:33:46', 'http://softwaretest.jp/en/'),
(22, 'phamduyhieuit@gmail.com', '$2a$10$J/2rtToGBVsXf1vj8LhEoOAY7hE.9aq3ZR.vV4ukmSGYziCBJaETK', 1, 0, 'SMART Inc', '20 chợ Giời, Hà Nội', '\"SMART Inc là công ty được thành lập năm 2022, tập trung vào các giải pháp công nghệ thông minh, tập trung ứng dụng vào nông nghiệp và y học. Founder là anh Phạm Duy Hiếu, cựu sinh viên đại học Bách Khoa.\"', '\"lương hấp dẫn, up to 3000$\"', '\"Trở thành công ty hàng đầu khu vực châu Á - Thái Bình Dương trong lĩnh vực ứng dụng công nghệ thông minh.\"', '\"tạo ra 500 nghìn việc làm cho xã hội.\"', '/api/containers/logo/download/1512838068403_bst-hinh-anh-hai-huoc-nhung-tro-dua-cong-nghe-sieu-vui-nhon-nhat-the-gioi-nhan-ngay-ca-thang-tu-1.jpg', '/api/containers/cover/download/1512838071054_fb2-1435922436.jpg', '2017-12-09 16:34:21', 'http://smartcompany.com'),
(24, 'huydz@bkconnect.com', '$2a$10$7o617di1Vm.6MGK9nEh34OFyRaZj7wrSYDh8AAvyPG0VPg.8fYaXa', 1, 0, 'HLV Company', 'Hà Nội , Việt Nam', '\"HLV solution cung cấp giải pháp công nghệ tối ưu cho các thiết bị thông minh . Các công nghệ mới nhất cho các công ty\"', '\"<p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><strong>\\\"CON NGƯỜI\\\"</strong></p><ul style=\\\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 10px 0px 10px 20px; list-style: initial; font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><li>Đào tạo, phát triển kỹ năng chuyên sâu với chuyên gia từ Nhật Bản, con đường thăng tiến rộng mở</li><li>Cơ hội làm việc ngắn hạn tại SHIFT Nhật Bản</li></ul><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><strong>\\\"WAY\\\"</strong></p><ul style=\\\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 10px 0px 10px 20px; list-style: initial; font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><li>Một nhóm, một sứ mệnh và một mục đích</li><li>Làm việc năng động, hỗ trợ nhiệt tình, suy nghĩ tích cực &amp; thẳng thắn góp ý</li><li>Không than phiền, thay vào đó là đề xuất thay đổi</li><li>Luôn làm tốt hơn khách hàng mong đợi</li></ul><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><strong>\\\"WILL\\\"</strong></p><ul style=\\\"margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 10px 0px 10px 20px; list-style: initial; font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\"><li>Chất lượng là trên hết</li></ul>\"', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px;\\\">Tại Việt Nam, SHIFT muốn kết hợp giữa Chất lượng Nhật Bản và sức mạnh Châu Á để tạo ra SHIFT ASIA, nơi kết hợp công nghệ tiên tiến nhất của SHIFT &nbsp; &nbsp; &nbsp; &nbsp;Nhật Bản và sức trẻ cùng năng lực cao của các kỹ sư CNTT hàng đầu tại Việt Nam.&nbsp;</span>\"', '\"<p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">\\\"No SHIFT ASIA, no shift to the next paradigm!</p><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">Chúng tôi nâng tầm Châu Á lên một đẳng cấp chất lượng mới.</p><p style=\\\"font-size: 16px; color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif;\\\">Và Châu Á sẽ nâng tầm thế giới lên một đẳng cấp chất lượng mới.\\\"</p>\"', '/api/containers/logo/download/1512839212393_WallStreet-Logo.png', '/api/containers/cover/download/1512839212575_Cover_Photo.jpg', '2017-12-09 16:49:36', 'http://huyv.dz'),
(25, 'levanhuy96@gmail.com', '$2a$10$o8B/dtNVCdRXSdMXD9VWYu9PPFud6amN/tLssze3QbbGryIKCVxRO', 1, 0, 'HLV Solution', 'Hà Nội, VN', '\"Tập đoàn công nghệ đa quốc gia HLV  , cung cấp các giải pháp công nghệ mới nhất và chuyên nghiệp trong lĩnh vực trí tuệ nhân tạo .\"', '\"<div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Nếu bạn mong muốn được làm việc ở một môi trường chuyên nghiệp</div><div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Nếu bạn mong muốn có một công việc ổn định với định hướng phát triển lâu dài</div><div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Nếu bạn mong muốn được ghi nhận và khen thưởng theo những đóng góp thực tế của cá nhân</div><div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Hyperion chính là lựa chọn lý tưởng dành cho bạn!</div><div><br></div>\"', '\"<div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Với 3 lĩnh vực kinh doanh chính: Tư vấn giải pháp, Giới thiệu nhân sự, Logistics, chúng tôi mong muốn đẩy mạnh hơn nữa mối quan hệ hợp tác Việt Nam - Nhật Bản, đồng thời góp phần cân bằng sự thiếu hụt nhân sự Nhật Bản và phát huy tiềm năng ưu tú của nhân sự Việt Nam<br></div>\"', '\"<div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Cái tên Hyperion bắt nguồn từ tên vị thần Mặt Trời trong thần thoại Hy Lạp.</div><div style=\\\"color: rgb(51, 51, 51); font-family: Roboto, Arial, sans-serif; font-size: 16px; text-align: justify;\\\">Chúng tôi hi vọng với trái tim và lòng nhiệt huyết của mình, khách hàng, nhân viên, bạn bè xung quanh và toàn thể xã hội sẽ trở nên giàu có và hạnh phúc.</div>\"', '/api/containers/logo/download/1512979530325_Hyperion-Logo.png', '/api/containers/cover/download/1512979530340_Hyperion-Cover2.png', '2017-12-11 07:41:22', 'http://hlvsolution.bk');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cv`
--

CREATE TABLE `cv` (
  `idstudent` int(11) NOT NULL,
  `idpost` int(11) NOT NULL,
  `details` text COLLATE utf8_unicode_ci,
  `apply` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `seen` tinyint(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `cv`
--

INSERT INTO `cv` (`idstudent`, `idpost`, `details`, `apply`, `seen`) VALUES
(30, 41, '{\"idstudent\":30,\"email\":\"20143603@student.hust.edu.vn\",\"name\":\"\",\"sex\":null,\"address\":null,\"birthday\":\"1970-10-01T00:00:00.000Z\",\"phone\":null,\"skill\":null,\"experience\":null,\"education\":null,\"objective\":null,\"photo\":null,\"other\":null,\"block\":false}', '2017-12-09 18:28:57', 1),
(30, 42, '{\"idstudent\":30,\"email\":\"20143603@student.hust.edu.vn\",\"name\":\"\",\"sex\":null,\"address\":null,\"birthday\":\"1970-10-01T00:00:00.000Z\",\"phone\":null,\"skill\":null,\"experience\":null,\"education\":null,\"objective\":null,\"photo\":null,\"other\":null,\"block\":false}', '2017-12-09 18:28:57', 1),
(30, 53, '{\"idstudent\":30,\"email\":\"20143603@student.hust.edu.vn\",\"name\":\"\",\"sex\":null,\"address\":null,\"birthday\":\"1970-10-01T00:00:00.000Z\",\"phone\":null,\"skill\":null,\"experience\":null,\"education\":null,\"objective\":null,\"photo\":null,\"other\":null,\"block\":false}', '2017-12-09 18:28:57', 1),
(31, 41, '{\"idstudent\":31,\"email\":\"20141943@student.hust.edu.vn\",\"name\":\"Lê Văn Huy\",\"sex\":true,\"address\":\"Hà Nội , Việt Nam\",\"birthday\":\"1996-04-24T00:00:00.000Z\",\"phone\":\"1234567890\",\"skill\":\"- NodeJS \\n- AngularJS \\n- Java , .NET\",\"experience\":\"Lập trình viên NodeJs tại công ty EUP Từ 2016-2017\",\"education\":\"Sinh viên năm 4 - Chuyên ngành HTTT\",\"objective\":\"Lập trình viên full stack\",\"photo\":\"/api/containers/student/download/1512837851110_admin.jpg\",\"other\":\"Đẹp trai , Đẹp trai , max Đẹp trai\",\"block\":false,\"position\":\"Lập trình viên Nodejs\"}', '2017-12-09 17:08:06', 1),
(31, 49, '{\"idstudent\":31,\"email\":\"20141943@student.hust.edu.vn\",\"name\":\"Lê Văn Huy\",\"sex\":true,\"address\":\"Hà Nội , Việt Nam\",\"birthday\":\"1996-04-24T00:00:00.000Z\",\"phone\":\"1234567890\",\"skill\":\"- NodeJS \\n- AngularJS \\n- Java , .NET\",\"experience\":\"Lập trình viên NodeJs tại công ty EUP Từ 2016-2017\",\"education\":\"Sinh viên năm 4 - Chuyên ngành HTTT\",\"objective\":\"Lập trình viên full stack\",\"photo\":\"/api/containers/student/download/1512837851110_admin.jpg\",\"other\":\"Đẹp trai , Đẹp trai , max Đẹp trai\",\"block\":false,\"position\":\"Lập trình viên nodejs\"}', '2017-12-11 07:53:37', 0),
(31, 56, '{\"idstudent\":31,\"email\":\"20141943@student.hust.edu.vn\",\"name\":\"Lê Văn Huy\",\"sex\":false,\"address\":\"Hà Nội , Việt Nam\",\"birthday\":\"1996-08-24T00:00:00.000Z\",\"phone\":\"1234567890\",\"skill\":\"- NodeJS \\n- AngularJS \\n- Java , .NET\",\"experience\":\"Lập trình viên NodeJs tại công ty EUP Từ 2016-2017\",\"education\":\"Sinh viên năm 4 - Chuyên ngành HTTT\",\"objective\":\"\",\"photo\":\"/api/containers/student/download/1512837851110_admin.jpg\",\"other\":\"=\",\"block\":false,\"position\":\"qbc\"}', '2017-12-11 08:20:48', 0),
(32, 41, '{\"idstudent\":32,\"email\":\"20142745@student.hust.edu.vn\",\"name\":\"Vũ Công Luật\",\"sex\":true,\"address\":\"Hưng Hà Thái Bình\",\"birthday\":\"1996-05-07T00:00:00.000Z\",\"phone\":\"019001003\",\"skill\":\"Full stack java (web, embed)\\nAssembly\",\"experience\":\"21 năm\",\"education\":\"Đại Học\",\"objective\":\"Kiếm lương vừa đủ sống, tháng tầm vài trăm nghìn đô.\",\"photo\":\"/api/containers/student/download/1512915656408_linux and window hate each other.gif\",\"other\":\"không có gì\",\"block\":false}', '2017-12-10 14:21:34', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `follow`
--

CREATE TABLE `follow` (
  `idstudent` int(11) NOT NULL,
  `idcompany` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `follow`
--

INSERT INTO `follow` (`idstudent`, `idcompany`) VALUES
(30, 16),
(30, 17),
(30, 18),
(30, 20),
(31, 25);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `MultiAccessToken`
--

CREATE TABLE `MultiAccessToken` (
  `id` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ttl` int(11) DEFAULT NULL,
  `scopes` text COLLATE utf8_unicode_ci,
  `created` datetime DEFAULT NULL,
  `userId` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `principalType` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `MultiAccessToken`
--

INSERT INTO `MultiAccessToken` (`id`, `ttl`, `scopes`, `created`, `userId`, `principalType`) VALUES
('Qtma9dHHDEhL1MNST9v8qq1G6pXASlGKQ08D6o9kJlmNfA9xUK70E4L8rZfIFfmy', 1209600, NULL, '2017-11-21 07:11:19', '6', 'admin');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post`
--

CREATE TABLE `post` (
  `idpost` int(11) NOT NULL,
  `idcompany` int(11) NOT NULL,
  `idcareer` int(11) NOT NULL,
  `title` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expired` timestamp NULL DEFAULT NULL,
  `category` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `require_skill` text COLLATE utf8_unicode_ci NOT NULL,
  `benefits` text COLLATE utf8_unicode_ci NOT NULL,
  `salary` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `contact` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `post`
--

INSERT INTO `post` (`idpost`, `idcompany`, `idcareer`, `title`, `description`, `created`, `expired`, `category`, `require_skill`, `benefits`, `salary`, `address`, `contact`) VALUES
(41, 24, 19, 'Lập trình viên Nodejs', '\"<span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">Our company embarks on a new mission to make a web application based on our .net desktop application.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">Your responsible:</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Collaborate with backend teams to build web app.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Research about Vuejs and Javascript controls.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Write unit test on JavaScript.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Improve performance, reliability of the system.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Responsibility to quality of the system.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Train and improve other members on front-end.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Provide knowledge about frontend to team.</span>\"', '2017-12-09 16:55:39', '2017-12-29 10:00:00', 'Partime/Fulltime', '\"<div class=\\\"job-requirements mobile-box\\\" style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><div class=\\\"requirements\\\" style=\\\"line-height: 21px; transition: height 0.3s; overflow: hidden; height: 294px;\\\">- At least 3 years’ experience in working as front-end developer.<br>- Learn new technical knowledge, technology, programming model.<br>- Measure and improve quality, reliability and performance of system.<br>- Proven track record of delivering high performance web applications.<br>- Expert JavaScript experience.<br>- Solid experience in front end web development.<br>- Good knowledge in HTML5/XHTML/CSS/CSS3, Bootstrap, Foundation, SASS.<br>- Experience with Asp.NET Core/MVVM/Web api.<br>- Experience in SQL and Database: MySQL, MongoDB, NoSQL…<br>- Work independently or collaborate with others.<br>- AngularJs, Reactjs, Vuejs, Typescript, Nodejs is plus.<br>- Mobile web development experience is plus.<br>- Knowledge about UI-UX is plus.<br>- Knowledge about security on web is plus.</div></div><div class=\\\"job-tags mobile-box\\\" style=\\\"padding: 30px 0px 0px; color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"></div>\"', '\"<div class=\\\"job-requirements mobile-box\\\" style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><div class=\\\"requirements\\\" style=\\\"line-height: 21px; transition: height 0.3s; overflow: hidden; height: 294px;\\\"><br><div class=\\\"what-we-offer mobile-box\\\"><div class=\\\"benefits\\\" style=\\\"margin-bottom: 45px;\\\"><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">13th month salary</div></div><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-icon col-xs-1\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 40px; text-align: center;\\\"><span class=\\\"fa fa-fw fa-lg fa-user-md\\\" style=\\\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; line-height: 28px; font-size: 13px; text-rendering: auto; width: 28px; height: 28px; border: 1px solid rgb(102, 102, 102); border-radius: 100%;\\\"></span></div><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">Bảo Việt Insurance</div></div><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-icon col-xs-1\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 40px; text-align: center;\\\"><span class=\\\"fa fa-fw fa-lg fa-plane\\\" style=\\\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; line-height: 28px; font-size: 13px; text-rendering: auto; width: 28px; height: 28px; border: 1px solid rgb(102, 102, 102); border-radius: 100%;\\\"></span></div><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">Annual company trip</div><div><br></div></div></div></div><div class=\\\"job-description mobile-box\\\" style=\\\"margin-bottom: 45px;\\\"></div></div></div>\"', '20M', 'Hồ Chí Minh', '\"Liện hệ : BKConnect@huylv.solution đề nộp CV hoặc có bất kì thắc mắc nào&nbsp;\"'),
(42, 20, 2, 'Nhân viên phát triển hệ thống', '\"Phát triển và bảo trì trang thương mại điện tử vnshop.vn\"', '2017-12-09 16:56:24', '2017-12-29 10:00:00', 'Partime/Fulltime', '\"Chăm chỉ thật thà, tinh thần cầu tiến cao.\"', '\"Lương up to 3000$.\"', '3000', 'Hà Nội', '\"tuyendung.vnshop@gmail.com\"'),
(43, 20, 2, 'Kiến trúc sư trưởng', '\"Xây dựng kiến trúc hệ thống. Đảm bảo hệ thống vận hành tốt với chi phí phù hợp. Đem lại các giải pháp thông minh cho hệ thống bán hàng.\"', '2017-12-09 17:19:03', '2018-01-29 10:00:00', 'Fulltime', '\"Chịu được áp lực công việc. Nhanh nhạy trong xử lý đột biến.\"', '\"Lương từ 5000-8000$. Phúc lợi xã hội đầy đủ.\"', '5000', 'Hà Nội', '\"tuyendung.vnshop@gmail.com\"'),
(44, 21, 2, 'NodeJS', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">Participate in projects:</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tThe application development project for millions of users of leading Japanese telecommunications service providers.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tSmart TV development project for a global technology corporation in Japan</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tProject to develop image processing applications, using advanced technology such as AR / VR, AI for an American customer.</span>\"', '2017-12-09 17:19:43', '2018-01-02 10:00:00', 'Partime', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tMinimum 1 year of experience in Android / iOS programming, prefer to using Kotlin / Swift&nbsp;</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tUnderstand the basics of OOP, MVC model, MVP or MVVM. Candidates who knows Clean Architecture is prefer.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tProficiency in programming tools such as Android Studio, Xcode.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tUI Controls, Layout and Animation in Android / iOS, able to customize and optimize the interface.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tExperience in communication programming between mobile and server over TCP / IP, HTTP, mastering XML, Json.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tExperienced working with CoreData, SQLite, Room, Internal &amp; External Storages.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tGood logical thinking.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tWilling to learn new technologies.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAbility to work with high pressure.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tCandidates who are familiar with the Agigle / Scrum development model, proficiency in Git and tasks management systems such as JIRA, Redmine are preferred.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\">\"', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\t“FPT care” health insurance provided by AON and is exclusive for FPT employees.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tCompany shuttle buses provide convenient way of transportation for all employees.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAnnual Summer Vacation: follows company’s policy and starts from May every year</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tSalary review 2 times/year or on excellent performance</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tInternational, dynamic, friendly working environment</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAnnual leave, working conditions follow Vietnam labor laws.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tOther allowances: lunch allowance, working on-site allowance, etc.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tF-ville Campus provides many facilities for FPT employees such as football ground, basketball &amp; volleyball, gym room, Coffee Shop, etc.</span>\"', '15M', 'Hồ Chí Minh', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">Interested candidates should submit a completed Curriculum Vitae/ Resume and Cover Letter to: Recruitment Department&nbsp;</span>\"'),
(45, 22, 2, 'Tuyển lập trình viên BigData', '\"<span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">SMART Inc is an agile software product company with a startup mindset. Our main offices are in Switzerland, Vietnam, France, England, Spain and more to come.&nbsp;</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">We are the ticketing solution provider of 2 of the top 3 greatest world sports tournament. We are looking for smart, collaborative, enthusiastic and well-organized professionals who are willing to take an active part in a sustainable, long-term product venture with a start-up mindset.</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">\"', '2017-12-09 17:23:42', '2017-12-26 10:00:00', 'Fulltime', '\"<span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">WE EXPECT FROM YOU:&nbsp;</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Bachelor’s Degree in Computer Science, Telecommunication or related field</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Strong experience with SQL/PLSQL (advanced level), Oracle, SSRS, Report Builder, Excel, Analysis skills, Testing skills</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Fluent English for day to day communications with European colleagues</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Excellent communication skills and flexibility</span>\"', '\"<p><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Attractive package, 18 days of leaves, Flexible, Health insurance</span></p><p><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- On-the-job learning, Support to grow and develop</span></p><p><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Software product division, Swiss organization and quality</span><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br></span><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br></span></p>\"', '10-30M', 'Hà Nội', '\"Chị Dung : dungnt@smart.vn\"'),
(46, 20, 2, 'Giám đốc sáng tạo', '\"Đảm nhận vai trò phát triển sáng tạo, đưa ra những giải pháp thông minh tích hợp vào hệ thống.\"', '2017-12-09 17:26:11', '2018-01-29 10:00:00', 'Fulltime', '\"Có trách nhiệm với công việc. Có tính sáng tạo cao.\"', '\"Lương 3000$. Phúc lợi xã hội đầy đủ.\"', '3000', '', '\"tuyendung.vnshop@gmail.com\"'),
(47, 20, 2, 'Phát triển front end', '\"Đảm nhận vai trò phát triển và bảo trì trang web vnshop.vn\"', '2017-12-09 17:27:43', '2018-01-29 10:00:00', 'Fulltime', '\"Có trách nhiệm với công việc. Có tính sáng tạo cao.\"', '\"Lương 3000$. Phúc lợi xã hội đầy đủ.\"', '3000', 'Hà Nội', '\"tuyendung.vnshop@gmail.com\"'),
(48, 20, 2, 'Sinh viên thực tập back end', '\"Thực tập sinh vị trị lập trình viên Back end.\"', '2017-12-09 17:31:28', '2018-01-29 10:00:00', 'Partime', '\"Không ngại khó ngại khổ. tinh thần trách nhiệm cao.\"', '\"Trợ cấp 50$. Hỗ trợ ăn trưa.\"', '50', 'Hà Nội', '\"tuyendung.vnshop@gmail.com\"'),
(49, 21, 2, 'NodeJS', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">Participate in projects:</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tThe application development project for millions of users of leading Japanese telecommunications service providers.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tSmart TV development project for a global technology corporation in Japan</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tProject to develop image processing applications, using advanced technology such as AR / VR, AI for an American customer.</span>\"', '2017-12-09 17:35:54', '2018-01-02 10:00:00', 'Partime', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tMinimum 1 year of experience in Android / iOS programming, prefer to using Kotlin / Swift&nbsp;</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tUnderstand the basics of OOP, MVC model, MVP or MVVM. Candidates who knows Clean Architecture is prefer.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tProficiency in programming tools such as Android Studio, Xcode.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tUI Controls, Layout and Animation in Android / iOS, able to customize and optimize the interface.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tExperience in communication programming between mobile and server over TCP / IP, HTTP, mastering XML, Json.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tExperienced working with CoreData, SQLite, Room, Internal &amp; External Storages.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tGood logical thinking.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tWilling to learn new technologies.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAbility to work with high pressure.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tCandidates who are familiar with the Agigle / Scrum development model, proficiency in Git and tasks management systems such as JIRA, Redmine are preferred.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\">\"', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\t“FPT care” health insurance provided by AON and is exclusive for FPT employees.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tCompany shuttle buses provide convenient way of transportation for all employees.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAnnual Summer Vacation: follows company’s policy and starts from May every year</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tSalary review 2 times/year or on excellent performance</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tInternational, dynamic, friendly working environment</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tAnnual leave, working conditions follow Vietnam labor laws.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tOther allowances: lunch allowance, working on-site allowance, etc.</span><br style=\\\"font-family: Roboto, sans-serif; color: rgb(51, 51, 51); font-size: 16px;\\\"><span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">•\\tF-ville Campus provides many facilities for FPT employees such as football ground, basketball &amp; volleyball, gym room, Coffee Shop, etc.</span>\"', '15M', 'Hồ Chí Minh', '\"<span style=\\\"color: rgb(51, 51, 51); font-family: Roboto, sans-serif; font-size: 16px;\\\">Interested candidates should submit a completed Curriculum Vitae/ Resume and Cover Letter to: Recruitment Department&nbsp;</span>\"'),
(50, 16, 2, 'Lập trình viên nhúng', '\"Lập trình viên nhúng.\"', '2017-12-09 17:48:17', '2018-01-29 10:00:00', 'Partime/Fulltime', '\"Tinh thần trách nhiệm cao.\"', '\"Lương 5000$. Phúc lợi xã hội đầy đủ.\"', '5000', 'Hà Nội', '\"tuyendung.bksmart@gmail.com\"'),
(51, 16, 2, 'Lập trình viên web', '\"Lập trình viên web. Xây dựng theo yêu cầu khách hàng.\"', '2017-12-09 17:50:37', '2018-01-29 10:00:00', 'Partime/Fulltime', '\"Tinh thần trách nhiệm cao.\"', '\"Lương 3000$. Phúc lợi xã hội đầy đủ.\"', '3000', 'Hà Nội', '\"tuyendung.bksmart@gmail.com\"'),
(52, 16, 2, 'Thực tập Bigdata', '\"Thực tập sinh Bigdata.\"', '2017-12-09 17:54:23', '2018-01-29 10:00:00', 'Partime', '\"Có tinh thần học hỏi.\"', '\"Hỗ trợ 50$.\"', '50', 'Hà Nội', '\"tuyendung.bksmart@gmail.com\"'),
(53, 16, 2, 'Thực tập Machine Learning', '\"Thực tập sinh Machine Learing.\"', '2017-12-09 17:55:00', '2018-01-29 10:00:00', 'Partime', '\"Có tinh thần học hỏi.\"', '\"Hỗ trợ 50$.\"', '50', 'Hà Nội', '\"tuyendung.bksmart@gmail.com\"'),
(54, 17, 2, 'Lập trình viên Bigdata', '\"Thực thi các giải pháp dữ liệu lớn.\"', '2017-12-09 18:08:16', '2018-01-29 10:00:00', 'Fulltime', '\"Có tinh thần trách nhiệm cao.\"', '\"Lương 5000$. Phúc lợi xã hội đầy đủ.\"', '5000', 'Hà Nội', '\"tuyendung.vncorp@gmail.com\"'),
(55, 17, 2, 'Lập trình viên Machine Learning', '\"Triển khai học máy vào các dự án thực tế.\"', '2017-12-09 18:09:01', '2018-01-29 10:00:00', 'Fulltime', '\"Có tinh thần trách nhiệm cao.\"', '\"Lương 5000$. Phúc lợi xã hội đầy đủ.\"', '5000', 'Hà Nội', '\"tuyendung.vncorp@gmail.com\"'),
(56, 25, 2, 'Lead Web Developer (php/python Move to Ruby) - $700 to $2000', '\"<span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">\\\"WE NEED A LEADERSHIP MIND-SET PERSON\\\"</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">We are working mainly on Ruby on Rails, so YOU ARE VERY WELCOME if you:</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Have Ability to learn fast other technologies to adapt with projects (provide intensive training course) - \\\"RUBY ON RAILS\\\"&nbsp;</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Can join in a product/system design phase with Japan team to analyze system requirements</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Can suggest, propose creative solutions to solve problems</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Can design, develop and test high-traffic Web applications (sometime do DevOps to deploy to production)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Can write technical documentation</span>\"', '2017-12-11 08:01:30', '2017-12-14 10:00:00', 'Partime/Fulltime', '\"<p><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">1. EDUCATION</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- Graduated from College/University in Information Technology/Computer</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">- At least 2 years experience as a Web developer in PHP or Java language</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">2. TECHNICAL EXPERIENCES</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">MUST HAVE</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Basic knowledge or interest in ROR</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Programming experience with PHP or Java (OOP)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Experience with MVC frameworks (Symfony, Code Igniter, Struts, Spring …)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Experience with Database system (MySQL/MongoDB)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Experience with Linux (Ubuntu, CentOS)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">NICE TO HAVE</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Experience with Redis, Index Engines (Apache Solr, Elastic Search)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Server Deployment (AWS, Chef)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">LANGUAGE SKILLS</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Can basically communicate (writing, speaking) in English</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Japanese is a huge plus</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">1. BE RECOGNIZED - Well Training and Developing Environment</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Provide Intensive technical training course for skill-up</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Skillful technical mentors are always there to help</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Occasionally have training in Japan and more opportunities working at ZIGExN in Japan</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Regularly receive feedbacks from Leader/Manager</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ \\\"03-months\\\" Performance Evaluation for Income and Career Development, totally 04 times/year</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">2. POSITIVE Team with lots of FUN &amp; CHILLs</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Providing Free Snacks (Kitkat, Choco Pie...), Fresh Milk, Coffee, Tea, Yogurt, Red Bulls..</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Happy Events: Birthday, Pizza Party, X-mas, Halloween and Full Moon Festival...</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Sports activities: Football, Table Tennis, Swimming Clubs and Badminton...</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Company Events:Quarterly Event, Year End Party, Yearly Company Trip and Other Occasional Events/BBQ...</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">3. We care about your HEALTH&nbsp;</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Bao Viet Premium Health-care packages&nbsp;</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ 24-hrs accident insurance</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Annual Health-care checkup</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">4. EDUCATION</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ Graduated from College/University in Information Technology/Computer</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">+ At least 2 years experience as a Web developer in PHP or Java language</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">(JapanWorks)</span><br style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><span style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\">japanesebeginner, 170630, 170701, 170702</span></p>\"', '\"<div class=\\\"what-we-offer mobile-box\\\" style=\\\"color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"><div class=\\\"benefits\\\" style=\\\"margin-bottom: 45px;\\\"><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\"><h2 style=\\\"font-family: Roboto, Arial, sans-serif; line-height: 1.21; color: rgb(85, 85, 85); margin-top: 5px; margin-bottom: 17px; font-size: 21px; text-transform: uppercase;\\\"><br></h2><div class=\\\"benefits\\\" style=\\\"margin-bottom: 45px;\\\"><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">03 Month Performance Evaluation (04 Times/year)</div></div><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-icon col-xs-1\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 40px; text-align: center;\\\"><span class=\\\"fa fa-fw fa-lg fa-plane\\\" style=\\\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; line-height: 28px; font-size: 13px; text-rendering: auto; width: 28px; height: 28px; border: 1px solid rgb(102, 102, 102); border-radius: 100%;\\\"></span></div><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">Opportunities training at ZIGExN in Japan</div></div><div class=\\\"benefit row\\\" style=\\\"margin-left: -5px; margin-right: -5px; margin-bottom: 7px;\\\"><div class=\\\"benefit-icon col-xs-1\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 40px; text-align: center;\\\"><span class=\\\"fa fa-fw fa-lg fa-glass\\\" style=\\\"font-variant-numeric: normal; font-variant-east-asian: normal; font-stretch: normal; line-height: 28px; font-size: 13px; text-rendering: auto; width: 28px; height: 28px; border: 1px solid rgb(102, 102, 102); border-radius: 100%;\\\"></span></div><div class=\\\"benefit-name col-xs-11\\\" style=\\\"padding-left: 5px; padding-right: 5px; width: 618.797px; padding-top: 5px;\\\">Fun and Chills</div></div></div></div></div></div></div><div class=\\\"job-description mobile-box\\\" style=\\\"margin-bottom: 45px; color: rgb(85, 85, 85); font-family: Roboto, Arial, sans-serif; font-size: 15px;\\\"></div>\"', '$700 to $2000', 'Hà Nội', '\"Email : HLVSolution@bkconnect.com\"');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `post_skill`
--

CREATE TABLE `post_skill` (
  `idpost` int(11) NOT NULL,
  `idskill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `post_skill`
--

INSERT INTO `post_skill` (`idpost`, `idskill`) VALUES
(41, 2),
(41, 3),
(42, 4),
(43, 1),
(43, 3),
(43, 4),
(43, 5),
(43, 7),
(43, 10),
(43, 12),
(43, 13),
(46, 5),
(47, 4),
(47, 11),
(48, 5),
(50, 6),
(50, 7),
(51, 4),
(51, 5),
(52, 8),
(53, 8),
(54, 8),
(55, 8),
(56, 1),
(56, 2),
(56, 5),
(56, 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `skill`
--

CREATE TABLE `skill` (
  `idskill` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf32_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `skill`
--

INSERT INTO `skill` (`idskill`, `name`) VALUES
(1, '.Net'),
(2, 'Agile'),
(3, 'Android'),
(4, 'AngularJS'),
(5, 'Back End'),
(6, 'C language'),
(7, 'C++ language'),
(8, 'Java language'),
(9, 'C# language'),
(10, 'IOS'),
(11, 'JavaScript'),
(12, 'Linux'),
(13, 'MySQL'),
(14, 'NodeJS'),
(15, 'PHP'),
(16, 'ReatJS'),
(17, 'Tester');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `student`
--

CREATE TABLE `student` (
  `idstudent` int(11) NOT NULL,
  `emailVerified` tinyint(1) NOT NULL DEFAULT '0',
  `block` tinyint(1) NOT NULL DEFAULT '0',
  `email` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `address` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `skill` text COLLATE utf8_unicode_ci,
  `experience` text COLLATE utf8_unicode_ci,
  `education` text COLLATE utf8_unicode_ci,
  `objective` text COLLATE utf8_unicode_ci,
  `photo` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL,
  `other` text COLLATE utf8_unicode_ci,
  `verificationToken` varchar(512) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `student`
--

INSERT INTO `student` (`idstudent`, `emailVerified`, `block`, `email`, `name`, `password`, `sex`, `address`, `birthday`, `phone`, `skill`, `experience`, `education`, `objective`, `photo`, `other`, `verificationToken`) VALUES
(30, 1, 0, '20143603@student.hust.edu.vn', '', '$2a$10$iHxh1nwhZcKhVxcCmbZ6m.YWJRKVcztUgC0O6KYdb8cV.BFNotBLG', NULL, NULL, NULL, NULL, 'null', 'null', 'null', NULL, NULL, 'null', NULL),
(31, 1, 0, '20141943@student.hust.edu.vn', 'Lê Văn Huy', '$2a$10$I.s/p52wCRjhVo3pMsSzdeYfk3/Ztur/lQn5nwiH5PCdz6fin8lqe', 1, 'Hà Nội , Việt Nam', '1996-04-24', '1234567890', '\"- NodeJS \\n- AngularJS \\n- Java , .NET\"', '\"Lập trình viên NodeJs tại công ty EUP Từ 2016-2017\"', '\"Sinh viên năm 4 - Chuyên ngành HTTT\"', 'Lập trình viên full stack', '/api/containers/student/download/1512837851110_admin.jpg', '\"Đẹp trai , Đẹp trai , max Đẹp trai\"', NULL),
(32, 1, 1, '20142745@student.hust.edu.vn', 'Vũ Công Luật', '$2a$10$0k4398lmTt2WvbItx61dOOJpTUea9I7ouIxd0CHpOTEbWIdhGDa5u', 1, 'Hưng Hà Thái Bình', '1996-05-07', '019001003', '\"Full stack java (web, embed)\\nAssembly\"', '\"21 năm\"', '\"Đại Học\"', 'Kiếm lương vừa đủ sống, tháng tầm vài trăm nghìn đô.', '/api/containers/student/download/1512915656408_linux and window hate each other.gif', '\"không có gì\"', NULL),
(33, 1, 0, '20141187@student.hust.edu.vn', '', '$2a$10$FxduSX/Hd2RwqxaMfkOmJuJHk2OrwdwTB3E2QGmZ/1aeHuhF7UmUe', NULL, NULL, NULL, NULL, 'null', 'null', 'null', NULL, NULL, 'null', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `AccessTokenAdmin`
--
ALTER TABLE `AccessTokenAdmin`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `AccessTokenCompany`
--
ALTER TABLE `AccessTokenCompany`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `AccessTokenStudent`
--
ALTER TABLE `AccessTokenStudent`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `ACL`
--
ALTER TABLE `ACL`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idadmin`);

--
-- Chỉ mục cho bảng `career`
--
ALTER TABLE `career`
  ADD PRIMARY KEY (`idcareer`);

--
-- Chỉ mục cho bảng `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`idcity`);

--
-- Chỉ mục cho bảng `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`idcompany`);

--
-- Chỉ mục cho bảng `cv`
--
ALTER TABLE `cv`
  ADD PRIMARY KEY (`idstudent`,`idpost`) USING BTREE,
  ADD KEY `fk_cv1` (`idpost`),
  ADD KEY `fk_cv` (`idstudent`);

--
-- Chỉ mục cho bảng `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`idcompany`,`idstudent`) USING BTREE,
  ADD KEY `fk_follow1` (`idstudent`),
  ADD KEY `fk_follow2` (`idcompany`);

--
-- Chỉ mục cho bảng `MultiAccessToken`
--
ALTER TABLE `MultiAccessToken`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `principalType` (`principalType`);

--
-- Chỉ mục cho bảng `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`idpost`),
  ADD KEY `fk_post` (`idcompany`),
  ADD KEY `idcareer` (`idcareer`);

--
-- Chỉ mục cho bảng `post_skill`
--
ALTER TABLE `post_skill`
  ADD PRIMARY KEY (`idpost`,`idskill`),
  ADD KEY `idskill` (`idskill`);

--
-- Chỉ mục cho bảng `skill`
--
ALTER TABLE `skill`
  ADD PRIMARY KEY (`idskill`);

--
-- Chỉ mục cho bảng `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`idstudent`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `ACL`
--
ALTER TABLE `ACL`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `admin`
--
ALTER TABLE `admin`
  MODIFY `idadmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `company`
--
ALTER TABLE `company`
  MODIFY `idcompany` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `post`
--
ALTER TABLE `post`
  MODIFY `idpost` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT cho bảng `student`
--
ALTER TABLE `student`
  MODIFY `idstudent` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cv`
--
ALTER TABLE `cv`
  ADD CONSTRAINT `fk_cv` FOREIGN KEY (`idstudent`) REFERENCES `student` (`idstudent`),
  ADD CONSTRAINT `fk_cv1` FOREIGN KEY (`idpost`) REFERENCES `post` (`idpost`);

--
-- Các ràng buộc cho bảng `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `fk_follow1` FOREIGN KEY (`idstudent`) REFERENCES `student` (`idstudent`),
  ADD CONSTRAINT `fk_follow2` FOREIGN KEY (`idcompany`) REFERENCES `company` (`idcompany`);

--
-- Các ràng buộc cho bảng `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `post_ibfk_1` FOREIGN KEY (`idcompany`) REFERENCES `company` (`idcompany`),
  ADD CONSTRAINT `post_ibfk_2` FOREIGN KEY (`idcareer`) REFERENCES `career` (`idcareer`);

--
-- Các ràng buộc cho bảng `post_skill`
--
ALTER TABLE `post_skill`
  ADD CONSTRAINT `post_skill_ibfk_1` FOREIGN KEY (`idpost`) REFERENCES `post` (`idpost`),
  ADD CONSTRAINT `post_skill_ibfk_2` FOREIGN KEY (`idskill`) REFERENCES `skill` (`idskill`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
