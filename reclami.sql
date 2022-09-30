-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema reclami
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema reclami
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `reclami` DEFAULT CHARACTER SET utf8mb4 ;
USE `reclami` ;

-- -----------------------------------------------------
-- Table `reclami`.`countries`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`countries` (
  `idCountry` INT(11) NOT NULL AUTO_INCREMENT,
  `countryName` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCountry`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`cities` (
  `idCity` INT(11) NOT NULL AUTO_INCREMENT,
  `cityName` VARCHAR(100) NOT NULL,
  `idCountry` INT(11) NOT NULL,
  PRIMARY KEY (`idCity`),
  INDEX `fk_cities_countries1_idx` (`idCountry` ASC) VISIBLE,
  CONSTRAINT `fk_cities_countries1`
    FOREIGN KEY (`idCountry`)
    REFERENCES `reclami`.`countries` (`idCountry`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`claimmers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`claimmers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `claimmerName` VARCHAR(100) NOT NULL,
  `claimmerLastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `rePassword` VARCHAR(45) NOT NULL,
  `DNI` INT NOT NULL,
  `position` VARCHAR(100) NULL,
  `idRole` INT(11) NOT NULL,
  `idCity` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_claimmers_roles_idx` (`idRole` ASC) VISIBLE,
  INDEX `fk_claimmers_cities1_idx` (`idCity` ASC) VISIBLE,
  CONSTRAINT `fk_claimmers_cities1`
    FOREIGN KEY (`idCity`)
    REFERENCES `reclami`.`cities` (`idCity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claimmers_roles`
    FOREIGN KEY (`idRole`)
    REFERENCES `reclami`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`claims` (
  `idClaims` INT(11) NOT NULL AUTO_INCREMENT,
  `claimTitle` VARCHAR(45) NOT NULL,
  `claimDescription` VARCHAR(2000) NOT NULL,
  `idClaimmer` INT(11) NOT NULL,
  `idDecisionMaker` INT(11) NOT NULL,
  PRIMARY KEY (`idClaims`),
  INDEX `fk_claims_claimmers1_idx` (`idClaimmer` ASC) VISIBLE,
  CONSTRAINT `fk_claims_claimmers1`
    FOREIGN KEY (`idClaimmer`)
    REFERENCES `reclami`.`claimmers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`favours`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`favours` (
  `idFavours` INT(11) NOT NULL AUTO_INCREMENT,
  `idClaimmer` INT(11) NOT NULL,
  `idClaims` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idFavours`),
  INDEX `fk_favours_claimmers1_idx` (`idClaimmer` ASC) VISIBLE,
  CONSTRAINT `fk_favours_claimmers1`
    FOREIGN KEY (`idClaimmer`)
    REFERENCES `reclami`.`claimmers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
