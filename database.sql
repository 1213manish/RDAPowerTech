-- RDA PowerTech Database Schema for Hostinger MySQL

CREATE DATABASE IF NOT EXISTS `rda_powertech` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `rda_powertech`;

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(50) NOT NULL UNIQUE,
  `name` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Products Table
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `category_id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `brand` VARCHAR(100) NOT NULL,
  `model_number` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `specifications` JSON NOT NULL,
  `image_url` VARCHAR(255) DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Quotations Table
CREATE TABLE IF NOT EXISTS `quotations` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `quotation_ref` VARCHAR(50) NOT NULL UNIQUE,
  `customer_name` VARCHAR(150) NOT NULL,
  `customer_email` VARCHAR(150) NOT NULL,
  `customer_phone` VARCHAR(50) NOT NULL,
  `company_name` VARCHAR(150) DEFAULT NULL,
  `remarks` TEXT DEFAULT NULL,
  `status` ENUM('PENDING', 'PROCESSED', 'REJECTED') DEFAULT 'PENDING',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Quotation Items Table
CREATE TABLE IF NOT EXISTS `quotation_items` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `quotation_id` INT NOT NULL,
  `product_id` INT DEFAULT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `brand` VARCHAR(100) DEFAULT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  FOREIGN KEY (`quotation_id`) REFERENCES `quotations`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Contact Messages Table
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `subject` VARCHAR(255) DEFAULT NULL,
  `message` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Seed Data: Categories
INSERT INTO `categories` (`id`, `slug`, `name`, `description`) VALUES
(1, 'mcb', 'MCB', 'Miniature Circuit Breakers for overload and short-circuit protection.'),
(2, 'switchgears', 'Switchgears', 'Low & Medium Voltage Air Circuit Breakers, MCCBs and Switch Disconnectors.'),
(3, 'drives', 'Drives & VFDs', 'Variable Frequency Drives, AC Inverters, and Motor Speed Control Controllers.'),
(4, 'contactors', 'Contactors & Relays', 'Heavy-duty contactors, thermal overload relays, and control switching units.'),
(5, 'solar-db', 'Solar DB AC/DC', 'Solar Array Junction Boxes, Distribution Boards, AC/DC combiner boxes.'),
(6, 'isolators', 'Isolators & Switches', 'Cam switches, load break disconnectors, and motorized isolators.'),
(7, 'power-supplies', 'Power Supplies & Terminals', 'DIN-rail power supplies, surge protection, and high-density terminal blocks.');

-- Seed Data: Products
INSERT INTO `products` (`id`, `category_id`, `name`, `brand`, `model_number`, `description`, `specifications`, `image_url`) VALUES
-- MCBs
(1, 1, 'Siemens 5SL 16A Single Pole MCB', 'Siemens Switchgears', '5SL6116-7RC', 'High performance C-curve miniature circuit breaker designed for commercial & industrial power distribution.', '{"Current Rating": "16A", "Poles": "Single Pole (1P)", "Breaking Capacity": "10 kA", "Voltage Rating": "240V / 415V AC", "Curve": "C-Curve"}', ''),
(2, 1, 'Schneider Acti9 iC60N 32A 3P MCB', 'Schneider Electrical', 'A9F74332', 'Triple pole miniature circuit breaker providing complete protection against short circuit and overload.', '{"Current Rating": "32A", "Poles": "Triple Pole (3P)", "Breaking Capacity": "10 kA", "Voltage Rating": "415V AC", "Curve": "C-Curve"}', ''),
(3, 1, 'L&T AU10000 63A 4P MCB', 'L & T Switchgear', 'CM90040OOO', 'Four-pole heavy duty circuit breaker suitable for main supply line isolation and motor load protection.', '{"Current Rating": "63A", "Poles": "Four Pole (4P)", "Breaking Capacity": "10 kA", "Voltage Rating": "415V AC", "Curve": "D-Curve"}', ''),

-- Switchgears
(4, 2, 'Eaton PowerPact 250A MCCB', 'Eaton Switchgear', 'NZMN2-A250', 'Molded Case Circuit Breaker with adjustable thermomagnetic release for industrial distribution.', '{"Current Rating": "250A", "Poles": "3 Pole", "Short Circuit Rating": "36 kA", "Operation": "Manual / Motorized", "Trip Unit": "Thermomagnetic"}', ''),
(5, 2, 'Siemens 3WT Air Circuit Breaker 1000A', 'Siemens Switchgears', '3WT8102-1AA00', 'Draw-out type Air Circuit Breaker (ACB) engineered for main LV power panels.', '{"Current Rating": "1000A", "Poles": "4 Pole", "Breaking Capacity": "50 kA", "Mounting": "Draw-out", "Microprocessor": "ETU37B"}', ''),

-- Drives
(6, 3, 'Mitsubishi FR-A800 11kW VFD Drive', 'Mitsubishi Drive', 'FR-A840-00310-E2-60', 'High precision AC Drive featuring sensorless vector control and high torque response.', '{"Power Output": "11 kW (15 HP)", "Input Voltage": "3-Phase 380-480V", "Control Mode": "Vector / V/f", "Enclosure": "IP20", "Overload Capacity": "150% for 60s"}', ''),
(7, 3, 'Yaskawa GA700 High Performance Drive 15kW', 'Yaskawa Drives', 'GA70T4038ABAA', 'Industrial drive engineered to handle induction motors, permanent magnet motors, and synchronous reluctance motors.', '{"Power Output": "15 kW (20 HP)", "Input Voltage": "380-480V AC", "Frequency Range": "0-590 Hz", "Communication": "Modbus RTU / Ethernet", "Safety": "STO SIL3"}', ''),

-- Contactors
(8, 4, 'Schneider TeSys D 50A Contactor', 'Schneider Electrical', 'LC1D50AM7', '3-pole contactor for AC-3 industrial motor control applications up to 22kW @ 400V.', '{"Coil Voltage": "220V AC 50/60Hz", "Rated Current": "50A (AC-3)", "Poles": "3 NO", "Auxiliary Contacts": "1 NO + 1 NC", "Mounting": "DIN Rail / Plate"}', ''),
(9, 4, 'L&T MNX 90 Heavy Duty Contactor', 'L & T Switchgear', 'CS94132', 'Robut power contactor designed for demanding switching duties and agricultural/industrial starters.', '{"Coil Voltage": "415V AC", "Rated Current": "90A", "Poles": "3 Pole", "Auxiliary": "2 NO + 2 NC", "Standard": "IEC 60947-4-1"}', ''),

-- Solar DB
(10, 5, 'Solar DB AC/DC 4 String Array Combiner Box', 'Solar DB AC/DC', 'SDB-DC4-AC1', 'Weatherproof IP65 DC Combiner Box equipped with 1000V DC SPD and Fuse Protection.', '{"Input Strings": "4 Strings In / 1 Out", "Max DC Voltage": "1000V DC", "SPD Class": "Type II DC SPD", "Protection": "IP65 Waterproof", "Enclosure": "Polycarbonate"}', ''),

-- Isolators & Switches
(11, 6, 'Telergon 125A 4P Cam Load Break Switch', 'Telergon', 'CCF01254P', 'Rotary load break isolator switch engineered for heavy industrial switching and isolations.', '{"Rated Current": "125A", "Poles": "4 Pole", "Voltage": "690V AC", "Handle": "Padlockable Red/Yellow", "Enclosure": "IP65 Box"}', ''),

-- Power Supplies & Terminals
(12, 7, 'Phoenix Contact Quint Power 24V 20A Power Supply', 'Phoenix Contact', '2866776', 'Primary-switched DIN-rail power supply with SFB (Selective Fuse Breaking) technology.', '{"Input Voltage": "85-264V AC", "Output Voltage": "24V DC", "Output Current": "20A", "Efficiency": "> 93%", "Mounting": "DIN Rail"}', ''),
(13, 7, 'Phoenix Contact ST 2.5 Spring Terminal Block', 'Phoenix Contact', '3031212', 'Feed-through terminal block with spring-cage connection for quick and vibration-proof wiring.', '{"Wire Range": "0.08 - 4 mm²", "Rated Current": "24A", "Nominal Voltage": "800V", "Color": "Gray", "Width": "5.2 mm"}';
