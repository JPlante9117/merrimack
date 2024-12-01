DROP DATABASE IF EXISTS GAMES;
CREATE DATABASE GAMES;

USE GAMES;

CREATE TABLE IF NOT EXISTS BoardGames (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50),
    description VARCHAR(500),
    FOREIGN KEY publisher_id REFERENCES Publishers(id),
    expansion BOOLEAN,
    min_players INT,
    max_players INT,
    time_to_play INT,
    min_age INT,
    complexity ENUM('Light', 'Medium Light', 'Medium', 'Medium Heavy', 'Heavy')
);

CREATE TABLE IF NOT EXISTS Publishers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS Categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE
);

CREATE TABLE IF NOT EXISTS BoardGamesCategories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FOREIGN KEY bg_id REFERENCES BoardGames(id),
    FOREIGN KEY cat_id REFERENCES Categories(id)
);