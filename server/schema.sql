CREATE DATABASE chat;

USE chat;

CREATE TABLE messages ( id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	text VARCHAR(100),
	roomname VARCHAR(20),
	date_created DATE
);

-- Error: Not showing up when compiled
CREATE TABLE users (
  username VARCHAR(20)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
