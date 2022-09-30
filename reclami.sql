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
  `idCountries` INT(11) NOT NULL AUTO_INCREMENT,
  `countryName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCountries`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`cities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`cities` (
  `idCity` INT(11) NOT NULL AUTO_INCREMENT,
  `cityName` VARCHAR(45) NOT NULL,
  `idCountries` INT(11) NOT NULL,
  PRIMARY KEY (`idCity`),
  INDEX `fk_cities_countries1_idx` (`idCountries` ASC),
  CONSTRAINT `fk_cities_countries1`
    FOREIGN KEY (`idCountries`)
    REFERENCES `reclami`.`countries` (`idCountries`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`roles` (
  `idRoles` INT(11) NOT NULL AUTO_INCREMENT,
  `roleName` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idRoles`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`claimmers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`claimmers` (
  `idClaimmer` INT(11) NOT NULL AUTO_INCREMENT,
  `claimmerName` VARCHAR(100) NOT NULL,
  `claimmerLastname` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `rePassword` VARCHAR(45) NOT NULL,
  `profile` VARCHAR(45) NOT NULL,
  `idRoles` INT(11) NOT NULL,
  `idCity` INT(11) NOT NULL,
  PRIMARY KEY (`idClaimmer`),
  INDEX `fk_claimmers_roles_idx` (`idRoles` ASC) ,
  INDEX `fk_claimmers_cities1_idx` (`idCity` ASC),
  CONSTRAINT `fk_claimmers_cities1`
    FOREIGN KEY (`idCity`)
    REFERENCES `reclami`.`cities` (`idCity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claimmers_roles`
    FOREIGN KEY (`idRoles`)
    REFERENCES `reclami`.`roles` (`idRoles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`decisionmakers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`decisionmakers` (
  `idDecisionMaker` INT(11) NOT NULL AUTO_INCREMENT,
  `decisionMakerName` VARCHAR(100) NOT NULL,
  `decisionMakerLastname` VARCHAR(100) NOT NULL,
  `decisionMakerEmail` VARCHAR(100) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `rePassword` VARCHAR(45) NOT NULL,
  `position` VARCHAR(45) NOT NULL,
  `idRoles` INT(11) NOT NULL,
  `idCity` INT(11) NOT NULL,
  PRIMARY KEY (`idDecisionMaker`),
  INDEX `fk_decisionMakers_roles1_idx` (`idRoles` ASC) ,
  INDEX `fk_decisionMakers_cities1_idx` (`idCity` ASC),
  CONSTRAINT `fk_decisionMakers_cities1`
    FOREIGN KEY (`idCity`)
    REFERENCES `reclami`.`cities` (`idCity`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_decisionMakers_roles1`
    FOREIGN KEY (`idRoles`)
    REFERENCES `reclami`.`roles` (`idRoles`)
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
  INDEX `fk_favours_claimmers1_idx` (`idClaimmer` ASC),
  CONSTRAINT `fk_favours_claimmers1`
    FOREIGN KEY (`idClaimmer`)
    REFERENCES `reclami`.`claimmers` (`idClaimmer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `reclami`.`claims`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `reclami`.`claims` (
  `idClaims` INT(11) NOT NULL AUTO_INCREMENT,
  `claimTitle` VARCHAR(255) NOT NULL,
  `claimDescription` VARCHAR(2000) NOT NULL,
  `claimPictureURL` VARCHAR(255) NOT NULL,
  `claimDate` VARCHAR(100) NOT NULL,
  `likes` INT(11) NOT NULL,
  `idClaimmer` INT(11) NOT NULL,
  `idDecisionMaker` INT(11) NOT NULL,
  `favours_idFavours` INT(11) NOT NULL,
  PRIMARY KEY (`idClaims`),
  INDEX `fk_claims_claimmers1_idx` (`idClaimmer` ASC) ,
  INDEX `fk_claims_decisionMakers1_idx` (`idDecisionMaker` ASC) ,
  INDEX `fk_claims_favours1_idx` (`favours_idFavours` ASC),
  CONSTRAINT `fk_claims_claimmers1`
    FOREIGN KEY (`idClaimmer`)
    REFERENCES `reclami`.`claimmers` (`idClaimmer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claims_decisionMakers1`
    FOREIGN KEY (`idDecisionMaker`)
    REFERENCES `reclami`.`decisionmakers` (`idDecisionMaker`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_claims_favours1`
    FOREIGN KEY (`favours_idFavours`)
    REFERENCES `reclami`.`favours` (`idFavours`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
