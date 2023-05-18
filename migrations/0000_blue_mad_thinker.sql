CREATE TABLE `auth`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`type` enum
('user','programmatic') NOT NULL DEFAULT 'user',
	`hash` varchar
(256) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT
(now
()),
	`lastUpdatedAt` timestamp NOT NULL ON
UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `bankAccountTypes`
(
	`type` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `banks`
(
	`bank` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `formSessions`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`uid` varchar
(256) NOT NULL,
	`formId` varchar
(256) NOT NULL,
	`startingStepId` varchar
(256) NOT NULL,
	`storedValues` json,
	`status` enum
('created','active','complete','revoked') NOT NULL DEFAULT 'created',
	`createdAt` timestamp NOT NULL DEFAULT
(now
()),
	`lastUpdatedAt` timestamp NOT NULL ON
UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `formSteps`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`formId` varchar
(256) NOT NULL,
	`template` json NOT NULL,
	`nextStepId` varchar
(256) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT
(now
()),
	`lastUpdatedAt` timestamp NOT NULL ON
UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `forms`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`defaultStartingStepId` varchar
(256) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT
(now
()),
	`lastUpdatedAt` timestamp NOT NULL ON
UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `genders`
(
	`gender` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `identityTypes`
(
	`identityType` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `maritalStatus`
(
	`status` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `profileForms`
(
	`profileId` varchar
(256) NOT NULL,
	`formId` varchar
(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `profileForms`
ADD PRIMARY KEY
(`profileId`,`formId`);

CREATE TABLE `profileTokens`
(
	`profileId` varchar
(256) NOT NULL,
	`tokenId` varchar
(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE `profileTokens`
ADD PRIMARY KEY
(`profileId`,`tokenId`);

CREATE TABLE `profiles`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`organisation` text NOT NULL,
	`description` text,
	`authId` varchar
(256) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT
(now
()),
	`lastUpdatedAt` timestamp NOT NULL ON
UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `provinces`
(
	`province` varchar
(256) PRIMARY KEY NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `titles`
(
	`title` varchar
(256) PRIMARY KEY NOT NULL,
	`gender` text NOT NULL,
	`description` text NOT NULL
);

CREATE TABLE `tokens`
(
	`id` varchar
(256) PRIMARY KEY NOT NULL,
	`profileId` varchar
(256) NOT NULL,
	`token` json NOT NULL,
	`status` enum
('created','revoked','expired') NOT NULL DEFAULT 'created',
	`issuedAt` timestamp NOT NULL DEFAULT
(now
())
);

CREATE UNIQUE INDEX `uidAndFormIdUniqueIndex` ON `formSessions`
(`uid`,`formId`);
CREATE INDEX `formIdIndex` ON `formSteps`
(`formId`);
CREATE INDEX `nextStepIdIndex` ON `formSteps`
(`nextStepId`);
CREATE UNIQUE INDEX `authIdIndex` ON `profiles`
(`authId`);
CREATE UNIQUE INDEX `profileIdIndex` ON `tokens`
(`profileId`);