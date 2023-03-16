-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2023 a las 22:07:50
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trialtasker_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cases`
--

CREATE TABLE `cases` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `case_name` varchar(255) NOT NULL,
  `case_radicate` varchar(255) NOT NULL,
  `case_status` varchar(255) NOT NULL,
  `case_user_id` bigint(20) UNSIGNED NOT NULL,
  `case_person_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_url` text NOT NULL,
  `stage_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(45, '2014_10_12_000000_create_users_table', 1),
(46, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(47, '2019_08_19_000000_create_failed_jobs_table', 1),
(48, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(49, '2023_03_09_000000_create_type_persons_table', 1),
(50, '2023_03_09_000001_create_persons_table', 1),
(51, '2023_03_09_000002_create_cases_table', 1),
(52, '2023_03_09_000003_create_type_stages_table', 1),
(53, '2023_03_09_000004_create_stages_table', 1),
(54, '2023_03_09_000005_create_files_table', 1),
(55, '2023_03_09_000006_create_person_stages_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persons`
--

CREATE TABLE `persons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `per_name` varchar(255) NOT NULL,
  `per_lastname` varchar(255) NOT NULL,
  `per_email` varchar(255) NOT NULL,
  `per_phone` varchar(255) NOT NULL,
  `per_address` varchar(255) NOT NULL,
  `per_nit` varchar(255) NOT NULL,
  `per_issue_nit` varchar(255) NOT NULL,
  `per_num_ministry` varchar(255) NOT NULL,
  `per_num_dispaych` varchar(255) NOT NULL,
  `per_radicated` varchar(255) NOT NULL,
  `per_authority` varchar(255) NOT NULL,
  `per_number` varchar(255) NOT NULL,
  `per_type_person` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `person_stages`
--

CREATE TABLE `person_stages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `per_sta_person` bigint(20) UNSIGNED NOT NULL,
  `per_sta_stage` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stages`
--

CREATE TABLE `stages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sta_name` varchar(255) NOT NULL,
  `sta_notes` text NOT NULL,
  `sta_case` bigint(20) UNSIGNED NOT NULL,
  `sta_type_stage` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_persons`
--

CREATE TABLE `type_persons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_person_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `type_persons`
--

INSERT INTO `type_persons` (`id`, `type_person_name`, `created_at`, `updated_at`) VALUES
(1, 'velit', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(2, 'eos', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(3, 'iusto', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(4, 'totam', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(5, 'ut', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(6, 'repudiandae', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(7, 'excepturi', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(8, 'architecto', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(9, 'omnis', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(10, 'quo', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(11, 'Cliente', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(12, 'Juez', '2023-03-14 00:12:34', '2023-03-14 00:12:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_stages`
--

CREATE TABLE `type_stages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `type_sta_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `phone`, `address`, `email`, `email_verified_at`, `password`, `is_admin`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Test User', 'Sipes', '+1-912-273-3591', '641 Myrtle Track Apt. 170\nSpinkamouth, ID 21894-2215', 'test@example.com', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 1, 'tvdVGzHsCdB0VXxVz4DvUUZDJE7lrTvJEbZQPfTBGVLToj9lQtnTw1docV6g', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(2, 'Shyanne Conroy', 'Kulas', '(754) 733-5687', '8804 Mertz Branch\nLake Edchester, SD 96208', 'kwiegand@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'HnoQzbdIaG', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(3, 'Godfrey Tremblay IV', 'Watsica', '952-271-5206', '904 Ledner Motorway\nNew Marcellefort, KY 15336', 'jadyn.doyle@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'n2R36F8HjZ', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(4, 'Willie Hamill', 'Jakubowski', '551.418.6689', '1852 Bradtke Trafficway Suite 728\nEast Chelsey, CA 23268', 'vcasper@example.net', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'bjQRvmWM2Q', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(5, 'Ophelia Shanahan', 'Reichel', '731-359-2226', '6700 Marvin Tunnel\nDietrichton, FL 06111-9391', 'cummerata.karina@example.net', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'aFLi3IpaFE', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(6, 'Holly Marvin II', 'Leuschke', '+1-678-255-7261', '434 Gerlach Branch\nHowellburgh, SC 33326', 'jhilpert@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'iCLVr2Gv3i', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(7, 'Jordon Lindgren', 'Morissette', '+1-952-525-7434', '606 Jeremie Pike\nSteuberfurt, NV 56667-1799', 'ettie.kulas@example.com', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, '3ZBqnJv29L', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(8, 'Ms. Kiara Lockman DVM', 'Ondricka', '+1-903-907-1717', '17503 Kattie Valley\nLake Emmanuellefurt, OH 06538', 'rogahn.geoffrey@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'm9yeqwlCfA', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(9, 'Nicolette Balistreri', 'Ratke', '424-722-0420', '628 Bogan Valleys\nNew Ofeliachester, VA 76435', 'kovacek.river@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'Sqh4CcsGwr', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(10, 'Percy Hermiston', 'Hagenes', '(415) 329-4961', '5494 Marjorie Unions Suite 079\nSouth Kurtis, OK 65547', 'emmett61@example.org', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'MKQEdG7LGK', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(11, 'Fay Champlin', 'Wilderman', '931.652.3629', '7944 Raymond Ferry\nHaileyhaven, DC 82418', 'mark22@example.net', '2023-03-14 00:12:34', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 0, 'Bh0WdJ6w1L', '2023-03-14 00:12:34', '2023-03-14 00:12:34'),
(12, 'Juan', 'Bohorquez', '123456789', 'Calle 1 Carrera 1', 'lasjdhfalskjd@gmail.com', NULL, '$2y$10$N2Vm6Kjp9fLBZulARreTq.INsLdrCunbm3abbPAY1wFl1BBffm9da', 0, NULL, '2023-03-14 00:20:32', '2023-03-14 00:20:32');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cases`
--
ALTER TABLE `cases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cases_case_user_id_foreign` (`case_user_id`),
  ADD KEY `cases_case_person_id_foreign` (`case_person_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `files_stage_id_foreign` (`stage_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `persons`
--
ALTER TABLE `persons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `persons_per_type_person_foreign` (`per_type_person`);

--
-- Indices de la tabla `person_stages`
--
ALTER TABLE `person_stages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `person_stages_per_sta_person_foreign` (`per_sta_person`),
  ADD KEY `person_stages_per_sta_stage_foreign` (`per_sta_stage`);

--
-- Indices de la tabla `stages`
--
ALTER TABLE `stages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stages_sta_case_foreign` (`sta_case`),
  ADD KEY `stages_sta_type_stage_foreign` (`sta_type_stage`);

--
-- Indices de la tabla `type_persons`
--
ALTER TABLE `type_persons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `type_stages`
--
ALTER TABLE `type_stages`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cases`
--
ALTER TABLE `cases`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `persons`
--
ALTER TABLE `persons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `person_stages`
--
ALTER TABLE `person_stages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `stages`
--
ALTER TABLE `stages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `type_persons`
--
ALTER TABLE `type_persons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `type_stages`
--
ALTER TABLE `type_stages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cases`
--
ALTER TABLE `cases`
  ADD CONSTRAINT `cases_case_person_id_foreign` FOREIGN KEY (`case_person_id`) REFERENCES `persons` (`id`),
  ADD CONSTRAINT `cases_case_user_id_foreign` FOREIGN KEY (`case_user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_stage_id_foreign` FOREIGN KEY (`stage_id`) REFERENCES `stages` (`id`);

--
-- Filtros para la tabla `persons`
--
ALTER TABLE `persons`
  ADD CONSTRAINT `persons_per_type_person_foreign` FOREIGN KEY (`per_type_person`) REFERENCES `type_persons` (`id`);

--
-- Filtros para la tabla `person_stages`
--
ALTER TABLE `person_stages`
  ADD CONSTRAINT `person_stages_per_sta_person_foreign` FOREIGN KEY (`per_sta_person`) REFERENCES `persons` (`id`),
  ADD CONSTRAINT `person_stages_per_sta_stage_foreign` FOREIGN KEY (`per_sta_stage`) REFERENCES `stages` (`id`);

--
-- Filtros para la tabla `stages`
--
ALTER TABLE `stages`
  ADD CONSTRAINT `stages_sta_case_foreign` FOREIGN KEY (`sta_case`) REFERENCES `cases` (`id`),
  ADD CONSTRAINT `stages_sta_type_stage_foreign` FOREIGN KEY (`sta_type_stage`) REFERENCES `type_stages` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
