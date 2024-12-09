--  source C:\xampp\htdocs\Portfolio\database\database.sql

drop database if exists `portfolio`;
create database `portfolio`;
use `portfolio`;

create table `messages` (
    `user_id` int auto_increment primary key,
    `name` varchar(255) not null,
    `email` varchar(255) not null,
    `subject` varchar(100) not null,
    `message` varchar(1000) not null
);
