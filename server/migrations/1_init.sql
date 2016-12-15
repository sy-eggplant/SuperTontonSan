-- +migrate Up
CREATE TABLE `events` (
	`id`					int UNSIGNED NOT NULL AUTO_INCREMENT,
	`title`				int NOT NULL,
	`budget`			int NOT NULL,
	`bar` 				varchar(255) NOt NULL,
	`place` 			int NOT NULL,
	`start_date` 	varchar(255) NOt NULL,
	`deadline` 		varchar(255) NOT NULL,
	`candidate` 	varchar(255) NOT NULL,
	`comments` 		varchar(255) NOT NULL,
	`user_id`			int NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- +migrate Down
DROP TABLE events;
