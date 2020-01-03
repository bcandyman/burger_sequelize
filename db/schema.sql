-- Drops the burgers_db if it exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the DB "burgers_db"
CREATE DATABASE burgers_db;

-- Use the DB burgers_db for the rest of the script
USE burgers_db;

-- Create the table "burgers"
CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY(id)
);