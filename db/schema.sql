create database burgers_db;
use burgers_db;
create table burgers_table
	(
		id int NOT NULL AUTO_INCREMENT,
		burger_name varchar(100),
		devoured  boolean not null default 1,
		date timestamp,
		primary key(id)
);
