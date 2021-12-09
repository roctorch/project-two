-- MySQL Workbench Synchronization
-- Generated: 2021-12-08 18:24
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: jackb

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER SCHEMA `shop`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `shop`.`users` (
  `user_id` INT(11) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `user_type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`customers` (
  `customer_id` INT(11) NOT NULL,
  `customer_name` VARCHAR(45) NOT NULL,
  `customer_phone` VARCHAR(45) NULL DEFAULT NULL,
  `customer_email` VARCHAR(45) NULL DEFAULT NULL,
  `customer_user_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  INDEX `fk_customers_users_idx` (`customer_user_id` ASC),
  CONSTRAINT `fk_customers_users`
    FOREIGN KEY (`customer_user_id`)
    REFERENCES `shop`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`employees` (
  `employee_id` INT(11) NOT NULL,
  `employee_name` VARCHAR(45) NULL DEFAULT NULL,
  `employee_phone` VARCHAR(45) NULL DEFAULT NULL,
  `employee_email` VARCHAR(45) NULL DEFAULT NULL,
  `employee_user_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  INDEX `fk_employees_users1_idx` (`employee_user_id` ASC),
  CONSTRAINT `fk_employees_users1`
    FOREIGN KEY (`employee_user_id`)
    REFERENCES `shop`.`users` (`user_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`appointments` (
  `appointment_id` INT(11) NOT NULL,
  `appointment_customer_id` INT(11) NOT NULL,
  `appointment_employee_id` INT(11) NULL DEFAULT NULL,
  `appointment_services_id` INT(11) NOT NULL,
  `appointment_time_start` DATETIME NOT NULL,
  `appointment_time_end` DATETIME NOT NULL,
  PRIMARY KEY (`appointment_id`),
  INDEX `fk_appointments_customers1_idx` (`appointment_customer_id` ASC),
  INDEX `fk_appointments_employees1_idx` (`appointment_employee_id` ASC),
  INDEX `fk_appointments_appointment_services1_idx` (`appointment_services_id` ASC),
  CONSTRAINT `fk_appointments_customers1`
    FOREIGN KEY (`appointment_customer_id`)
    REFERENCES `shop`.`customers` (`customer_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointments_employees1`
    FOREIGN KEY (`appointment_employee_id`)
    REFERENCES `shop`.`employees` (`employee_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointments_appointment_services1`
    FOREIGN KEY (`appointment_services_id`)
    REFERENCES `shop`.`appointment_services` (`appointment_services_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`services` (
  `service_id` INT(11) NOT NULL,
  `service_name` VARCHAR(45) NOT NULL,
  `service_price` FLOAT(11) NOT NULL,
  `service_time` TIME NOT NULL,
  PRIMARY KEY (`service_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`appointment_services` (
  `appointment_services_id` INT(11) NOT NULL,
  `service1_id` INT(11) NOT NULL,
  `service2_id` INT(11) NULL DEFAULT NULL,
  `service3_id` INT(11) NULL DEFAULT NULL,
  `service4_id` INT(11) NULL DEFAULT NULL,
  `service5_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`appointment_services_id`),
  INDEX `fk_appointment_services_services1_idx` (`service1_id` ASC),
  INDEX `fk_appointment_services_services2_idx` (`service2_id` ASC),
  INDEX `fk_appointment_services_services3_idx` (`service3_id` ASC),
  INDEX `fk_appointment_services_services4_idx` (`service4_id` ASC),
  INDEX `fk_appointment_services_services5_idx` (`service5_id` ASC),
  CONSTRAINT `fk_appointment_services_services1`
    FOREIGN KEY (`service1_id`)
    REFERENCES `shop`.`services` (`service_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_services_services2`
    FOREIGN KEY (`service2_id`)
    REFERENCES `shop`.`services` (`service_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_services_services3`
    FOREIGN KEY (`service3_id`)
    REFERENCES `shop`.`services` (`service_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_services_services4`
    FOREIGN KEY (`service4_id`)
    REFERENCES `shop`.`services` (`service_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_appointment_services_services5`
    FOREIGN KEY (`service5_id`)
    REFERENCES `shop`.`services` (`service_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`invoice` (
  `invoice_id` INT(11) NOT NULL,
  `invoice_customer_id` INT(11) NOT NULL,
  `invoice_employee_id` INT(11) NOT NULL,
  `invoice_price` FLOAT(11) NOT NULL,
  `invoice_notes` VARCHAR(255) NULL DEFAULT NULL,
  `referral_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`invoice_id`),
  INDEX `fk_invoice_appointments1_idx` (`invoice_customer_id` ASC),
  INDEX `fk_invoice_appointments2_idx` (`invoice_employee_id` ASC),
  INDEX `fk_invoice_referrals1_idx` (`referral_id` ASC),
  CONSTRAINT `fk_invoice_appointments1`
    FOREIGN KEY (`invoice_customer_id`)
    REFERENCES `shop`.`appointments` (`appointment_customer_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_invoice_appointments2`
    FOREIGN KEY (`invoice_employee_id`)
    REFERENCES `shop`.`appointments` (`appointment_employee_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_invoice_referrals1`
    FOREIGN KEY (`referral_id`)
    REFERENCES `shop`.`referrals` (`referral_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`partners` (
  `partner_id` INT(11) NOT NULL,
  `partner_specialties_id` INT(11) NOT NULL,
  `partner_name` VARCHAR(45) NOT NULL,
  `partner_phone` VARCHAR(45) NOT NULL,
  `partner_address` VARCHAR(45) NOT NULL,
  `partner_website` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`partner_id`),
  INDEX `fk_partners_partner_specialties1_idx` (`partner_specialties_id` ASC),
  CONSTRAINT `fk_partners_partner_specialties1`
    FOREIGN KEY (`partner_specialties_id`)
    REFERENCES `shop`.`partner_specialties` (`partner_specialties_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COMMENT = '	';

CREATE TABLE IF NOT EXISTS `shop`.`partner_specialties` (
  `partner_specialties_id` INT(11) NOT NULL,
  `specialty1` VARCHAR(45) NOT NULL,
  `specialty2` VARCHAR(45) NULL DEFAULT NULL,
  `specialty3` VARCHAR(45) NULL DEFAULT NULL,
  `specialty4` VARCHAR(45) NULL DEFAULT NULL,
  `specialty5` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`partner_specialties_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `shop`.`referrals` (
  `referral_id` INT(11) NOT NULL,
  `referral_reason` VARCHAR(45) NULL DEFAULT NULL,
  `partner_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`referral_id`),
  INDEX `fk_referrals_partners1_idx` (`partner_id` ASC),
  CONSTRAINT `fk_referrals_partners1`
    FOREIGN KEY (`partner_id`)
    REFERENCES `shop`.`partners` (`partner_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
