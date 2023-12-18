CREATE TABLE `dog` (
	`id` bigint AUTO_INCREMENT NOT NULL,
	`name` varchar(32),
	`imgUrl` varchar(255),
	`description` varchar(255),
	CONSTRAINT `dog_id` PRIMARY KEY(`id`)
);

CREATE TABLE `request` (
	`user_id` varchar(255),
	`dog_id` bigint
);

ALTER TABLE `request` ADD CONSTRAINT `request_user_id_auth_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `auth_user`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `request` ADD CONSTRAINT `request_dog_id_dog_id_fk` FOREIGN KEY (`dog_id`) REFERENCES `dog`(`id`) ON DELETE no action ON UPDATE no action;