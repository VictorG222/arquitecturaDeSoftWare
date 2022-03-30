-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-03-2022 a las 07:32:25
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bettergym`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entradas`
--

CREATE TABLE `entradas` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `tipo` int(100) NOT NULL,
  `status` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `US_ID` int(11) NOT NULL,
  `US_name` varchar(100) NOT NULL,
  `US_apellido` varchar(100) NOT NULL,
  `US_edad` int(100) NOT NULL,
  `US_sexo` varchar(100) NOT NULL,
  `fecha_de_renovacion` date NOT NULL,
  `estado_membresia` int(100) NOT NULL,
  `status` int(100) NOT NULL,
  `UID` varchar(100) DEFAULT NULL,
  `US_email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`US_ID`, `US_name`, `US_apellido`, `US_edad`, `US_sexo`, `fecha_de_renovacion`, `estado_membresia`, `status`, `UID`, `US_email`) VALUES
(10, 'root', 'root', 21, 'Masculino', '2023-01-01', 1, 1, 'efbwedvjhvbsdjkvb', 'root@gmail.com'),
(13, 'root', 'root', 100, 'Masculino', '2022-03-29', 1, 1, 'muFWVoLOahVtaWWS4fB0GSu1SCt2', 'admin@gmail.com'),
(14, 'manuel', 'cvarrubias', 21, 'Masculino', '2022-03-30', 1, 1, 'ffofVlF0sNQh43QVFpHrIbyM22z2', 'victor@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`US_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `entradas`
--
ALTER TABLE `entradas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `US_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entradas`
--
ALTER TABLE `entradas`
  ADD CONSTRAINT `entradas_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`US_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
