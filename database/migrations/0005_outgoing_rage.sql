CREATE TABLE `SessionStepData` (
	`SessionId` varchar(256) NOT NULL,
	`StepId` varchar(256) NOT NULL,
	`StoredValues` json,
	`CreatedAt` timestamp NOT NULL DEFAULT (now()),
	`LastUpdatedAt` timestamp NOT NULL ON UPDATE CURRENT_TIMESTAMP
);
--> statement-breakpoint
ALTER TABLE `SessionStepData` ADD PRIMARY KEY(`SessionId`,`StepId`);
