-- +migrate Up
CREATE TABLE `partcipants` (
	`id`			int UNSIGNED NOT NULL AUTO_INCREMENT,
	`events_id`		varchar(255) NOT NULL,
	`name`			varchar(255) NOT NULL,
	`check`			int NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- +migrate Down
DROP TABLE partcipants;
