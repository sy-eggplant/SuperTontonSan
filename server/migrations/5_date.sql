-- +migrate Up
CREATE TABLE `date` (
	`id`			int UNSIGNED NOT NULL AUTO_INCREMENT,
	`events_id`		varchar(255) NOT NULL,
	`candidate_id`	varchar(255) NOT NULL,
	`date`			varchar(255) NOT NULL,
	`check`			int NOT NULL,
	PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

-- +migrate Down
DROP TABLE partcipants;
