CREATE TABLE `ProfileForms` (
	`ProfileId` varchar(256) NOT NULL,
	`FormId` varchar(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `ProfileForms` ADD PRIMARY KEY(`ProfileId`,`FormId`);
--> statement-breakpoint
CREATE TABLE `ProfileTokens` (
	`ProfileId` varchar(256) NOT NULL,
	`TokenId` varchar(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `ProfileTokens` ADD PRIMARY KEY(`ProfileId`,`TokenId`);
