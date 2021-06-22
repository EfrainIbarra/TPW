-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-06-2021 a las 04:13:15
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `electivas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `programa` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`id`, `nombre`, `programa`) VALUES
(1, 'Efrain Ibarra Belmonte', 'Sistemas computacionales'),
(3, 'Miguel Ángel de la Rosa Trejo', 'Sistemas computacionales'),
(5, 'Gabriel Emiliano Díaz de León Martínez', 'Sistemas computacionales'),
(6, 'Jesús Israel Uscanga Rodríguez', 'Sistemas computacionales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `constancia`
--

CREATE TABLE `constancia` (
  `id` int(11) NOT NULL,
  `actividad` varchar(45) DEFAULT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `horas` int(11) DEFAULT NULL,
  `archivo` varchar(45) DEFAULT NULL,
  `observaciones` varchar(45) DEFAULT NULL,
  `valida` tinyint(4) DEFAULT NULL,
  `observaciones_encargado` varchar(45) DEFAULT NULL,
  `creditos` float DEFAULT NULL,
  `denominacion_id` int(11) DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `constancia`
--

INSERT INTO `constancia` (`id`, `actividad`, `fecha_inicio`, `fecha_fin`, `horas`, `archivo`, `observaciones`, `valida`, `observaciones_encargado`, `creditos`, `denominacion_id`, `alumno_id`) VALUES
(12, 'Curso de React', '2021-06-03', '2021-06-06', 40, 'no se', 'Ninguna', 1, NULL, 2.5, 32, 1),
(13, 'Curso de Flutter', '2021-06-05', '2021-06-18', 30, 'no se', 'Ninguna', -1, '', NULL, 32, 1),
(14, 'Curso de React Native', '2021-06-07', '2021-06-04', 25, '', 'Ninguna', -1, '', NULL, 32, 1),
(56, 'Curso de Android', '2020-12-12', '2020-12-12', 64, '', 'Ninguna', 1, NULL, 4, 32, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `constancia_electiva`
--

CREATE TABLE `constancia_electiva` (
  `id` int(11) NOT NULL,
  `creditos` float DEFAULT NULL,
  `electiva_id` int(11) DEFAULT NULL,
  `constancia_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `constancia_electiva`
--

INSERT INTO `constancia_electiva` (`id`, `creditos`, `electiva_id`, `constancia_id`) VALUES
(1, 2.5, 1, 12),
(2, 4, 1, 56);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `denominacion`
--

CREATE TABLE `denominacion` (
  `id` int(11) NOT NULL,
  `eje_tematico` varchar(50) DEFAULT NULL,
  `modalidad` varchar(50) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `factor` int(11) DEFAULT NULL,
  `ejemplos` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `denominacion`
--

INSERT INTO `denominacion` (`id`, `eje_tematico`, `modalidad`, `descripcion`, `factor`, `ejemplos`) VALUES
(31, 'Enfasis en la profesión', 'Trabajo de campo supervisado', '1 x 50 horas', 50, 'a) Practicas profesionales <br>\nb) Estancias en empresas <br>\nc) Trabajos de investigación <br>\nd) Asesorías <br>\ne) Consultorías <br>'),
(32, 'Enfasis en la profesión', 'Docencia', '1 x 16 horas', 16, 'a) Unidades de Aprendizaje Optativas. <br>\nb) Unidades de Aprendizaje de otros Programas Académicos: Cambios de carrera , cambios de plan. <br>\nc) Cursos, seminarios, talleres, diplomados, entre otros propios de la disciplina.'),
(33, 'Enfasis en la profesión', 'Independientes', '1 x 20 horas', 20, 'a) Concursos <br>\nb) Asistencia a congresos <br>\nc) Simuladores <br>'),
(34, 'Complementarias a la formación', 'Docencia', '1 x 16 horas', 16, 'a) Taller de algún área artística o cultural'),
(36, 'Inquietudes vocacionales propias', 'Docencia', '1 x 16 horas', 16, 'a) Cursos ofertados en las unidades académicas del IPN. <br>\nb) Estudio de una lengua extranjera que no se considere requisito de titulación. <br>\nc) Cursos de programas informáticos. <br>\nd) Cursos de otras instituciones educativas con las que se tenga convenio. <br>'),
(38, 'Inquietudes vocacionales propias', 'Trabajo de Campo Supervisado', '1 x 50 horas', 50, 'a) Programa interinstitucional para el fortalecimiento de la investigación y el Posgrado del pacifico DELFIN'),
(39, 'Inquietudes vocacionales propias', 'Independientes', '1 x 20 horas', 20, 'a) Emprendedores: incubación de empresas <br>\nb) Ferias nacionales e internacionales <br>\nc) Conferencias <br>\nd) Congresos <br>\ne) Ponencias <br>'),
(40, 'Complementarias a la formación', 'Trabajo de Campo Supervisado', '1 x 50 horas', 50, 'a) Servicios comunitarios <br>\nb) Programas de beneficio social  <br>\nc) Competencias deportivas en diferentes torneos <br>\nd) Presentación de obras culturales <br>\ne) Club de arte <br>\nf) Alumno tutor <br>\ng) Apoyo a las unidades académicas <br>'),
(41, 'Complementarias a la formación', 'Independientes', '1 x 20 horas', 20, 'a) Exposiciones de arte nacional e internacional <br>\nb) Competencias deportivas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `electiva`
--

CREATE TABLE `electiva` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `creditos` float DEFAULT NULL,
  `creditos_acumulados` float DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `electiva`
--

INSERT INTO `electiva` (`id`, `nombre`, `creditos`, `creditos_acumulados`, `alumno_id`) VALUES
(1, 'Electiva1', 20, 1.5, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `constancia`
--
ALTER TABLE `constancia`
  ADD PRIMARY KEY (`id`),
  ADD KEY `denominacion_id` (`denominacion_id`),
  ADD KEY `alumno_id` (`alumno_id`);

--
-- Indices de la tabla `constancia_electiva`
--
ALTER TABLE `constancia_electiva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `electiva_id` (`electiva_id`),
  ADD KEY `constancia_id` (`constancia_id`);

--
-- Indices de la tabla `denominacion`
--
ALTER TABLE `denominacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `electiva`
--
ALTER TABLE `electiva`
  ADD PRIMARY KEY (`id`),
  ADD KEY `alumno_id` (`alumno_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumno`
--
ALTER TABLE `alumno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `constancia`
--
ALTER TABLE `constancia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `constancia_electiva`
--
ALTER TABLE `constancia_electiva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `denominacion`
--
ALTER TABLE `denominacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT de la tabla `electiva`
--
ALTER TABLE `electiva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `constancia`
--
ALTER TABLE `constancia`
  ADD CONSTRAINT `constancia_ibfk_1` FOREIGN KEY (`denominacion_id`) REFERENCES `denominacion` (`id`),
  ADD CONSTRAINT `constancia_ibfk_2` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`id`);

--
-- Filtros para la tabla `constancia_electiva`
--
ALTER TABLE `constancia_electiva`
  ADD CONSTRAINT `constancia_electiva_ibfk_1` FOREIGN KEY (`electiva_id`) REFERENCES `electiva` (`id`),
  ADD CONSTRAINT `constancia_electiva_ibfk_2` FOREIGN KEY (`constancia_id`) REFERENCES `constancia` (`id`);

--
-- Filtros para la tabla `electiva`
--
ALTER TABLE `electiva`
  ADD CONSTRAINT `electiva_ibfk_1` FOREIGN KEY (`alumno_id`) REFERENCES `alumno` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
