-- +migrate Up
CREATE TABLE `users` (
	`id`			int UNSIGNED NOT NULL AUTO_INCREMENT,
	`user_name`		varchar(255) NOT NULL,
	`mail`			varchar(255) NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- +migrate Down
DROP TABLE users;