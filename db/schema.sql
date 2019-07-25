DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(55) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO tasks (task) VALUES ('Pick up milk.');
INSERT INTO tasks (task) VALUES ('Mow the lawn.');
INSERT INTO tasks (task) VALUES ('Call Shannon back.');
