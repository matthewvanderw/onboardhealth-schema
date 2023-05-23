CREATE TABLE `Relationships` (
	`Relation` text PRIMARY KEY NOT NULL,
	`Description` text NOT NULL
);
--> statement-breakpoint
ALTER TABLE `FormSteps` ADD `Action` enum('default','push') DEFAULT 'default';--> statement-breakpoint
ALTER TABLE `FormSteps` ADD `Options` json;