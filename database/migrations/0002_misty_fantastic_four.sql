DROP TABLE profileForms;--> statement-breakpoint
DROP TABLE profileTokens;--> statement-breakpoint
RENAME TABLE `auth` TO `Auth`;--> statement-breakpoint
RENAME TABLE `bankAccountTypes` TO `BankAccountTypes`;--> statement-breakpoint
RENAME TABLE `banks` TO `Banks`;--> statement-breakpoint
RENAME TABLE `formSessions` TO `FormSessions`;--> statement-breakpoint
RENAME TABLE `formSteps` TO `FormSteps`;--> statement-breakpoint
RENAME TABLE `forms` TO `Forms`;--> statement-breakpoint
RENAME TABLE `genders` TO `Genders`;--> statement-breakpoint
RENAME TABLE `identityTypes` TO `IdentityTypes`;--> statement-breakpoint
RENAME TABLE `maritalStatus` TO `MaritalStatus`;--> statement-breakpoint
RENAME TABLE `profiles` TO `Profiles`;--> statement-breakpoint
RENAME TABLE `provinces` TO `Provinces`;--> statement-breakpoint
RENAME TABLE `titles` TO `Titles`;--> statement-breakpoint
RENAME TABLE `tokens` TO `Tokens`;--> statement-breakpoint
ALTER TABLE `Auth` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `Auth` RENAME COLUMN `type` TO `Type`;--> statement-breakpoint
ALTER TABLE `Auth` RENAME COLUMN `hash` TO `Hash`;--> statement-breakpoint
ALTER TABLE `Auth` RENAME COLUMN `createdAt` TO `CreatedAt`;--> statement-breakpoint
ALTER TABLE `Auth` RENAME COLUMN `lastUpdatedAt` TO `LastUpdatedAt`;--> statement-breakpoint
ALTER TABLE `BankAccountTypes` RENAME COLUMN `type` TO `Type`;--> statement-breakpoint
ALTER TABLE `BankAccountTypes` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `Banks` RENAME COLUMN `bank` TO `Bank`;--> statement-breakpoint
ALTER TABLE `Banks` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `uid` TO `Uid`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `formId` TO `FormId`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `startingStepId` TO `StartingStepId`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `storedValues` TO `StoredValues`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `status` TO `Status`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `createdAt` TO `CreatedAt`;--> statement-breakpoint
ALTER TABLE `FormSessions` RENAME COLUMN `lastUpdatedAt` TO `LastUpdatedAt`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `formId` TO `FormId`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `template` TO `Template`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `nextStepId` TO `NextStepId`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `createdAt` TO `CreatedAt`;--> statement-breakpoint
ALTER TABLE `FormSteps` RENAME COLUMN `lastUpdatedAt` TO `LastUpdatedAt`;--> statement-breakpoint
ALTER TABLE `Forms` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `Forms` RENAME COLUMN `defaultStartingStepId` TO `DefaultStartingStepId`;--> statement-breakpoint
ALTER TABLE `Forms` RENAME COLUMN `createdAt` TO `CreatedAt`;--> statement-breakpoint
ALTER TABLE `Forms` RENAME COLUMN `lastUpdatedAt` TO `LastUpdatedAt`;--> statement-breakpoint
ALTER TABLE `Genders` RENAME COLUMN `gender` TO `Gender`;--> statement-breakpoint
ALTER TABLE `IdentityTypes` RENAME COLUMN `identityType` TO `IdentityType`;--> statement-breakpoint
ALTER TABLE `IdentityTypes` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `MaritalStatus` RENAME COLUMN `status` TO `Status`;--> statement-breakpoint
ALTER TABLE `MaritalStatus` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `organisation` TO `Organisation`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `authId` TO `AuthId`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `createdAt` TO `CreatedAt`;--> statement-breakpoint
ALTER TABLE `Profiles` RENAME COLUMN `lastUpdatedAt` TO `LastUpdatedAt`;--> statement-breakpoint
ALTER TABLE `Provinces` RENAME COLUMN `province` TO `Province`;--> statement-breakpoint
ALTER TABLE `Provinces` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `Titles` RENAME COLUMN `title` TO `Title`;--> statement-breakpoint
ALTER TABLE `Titles` RENAME COLUMN `gender` TO `Filter`;--> statement-breakpoint
ALTER TABLE `Titles` RENAME COLUMN `description` TO `Description`;--> statement-breakpoint
ALTER TABLE `Tokens` RENAME COLUMN `id` TO `Id`;--> statement-breakpoint
ALTER TABLE `Tokens` RENAME COLUMN `profileId` TO `ProfileId`;--> statement-breakpoint
ALTER TABLE `Tokens` RENAME COLUMN `token` TO `Token`;--> statement-breakpoint
ALTER TABLE `Tokens` RENAME COLUMN `status` TO `Status`;--> statement-breakpoint
ALTER TABLE `Tokens` RENAME COLUMN `issuedAt` TO `IssuedAt`;--> statement-breakpoint
ALTER TABLE `Genders` MODIFY COLUMN `Gender` varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE `IdentityTypes` MODIFY COLUMN `IdentityType` varchar(16) NOT NULL;--> statement-breakpoint
ALTER TABLE `MaritalStatus` MODIFY COLUMN `Status` varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE `Provinces` MODIFY COLUMN `Province` varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE `Titles` MODIFY COLUMN `Title` varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE `Titles` MODIFY COLUMN `Filter` varchar(8) NOT NULL;--> statement-breakpoint
ALTER TABLE `Forms` ADD `Theme` json;--> statement-breakpoint
ALTER TABLE `FormSessions` DROP COLUMN `theme`;--> statement-breakpoint
DROP INDEX `uidAndFormIdUniqueIndex` ON ``.`FormSessions`;--> statement-breakpoint
DROP INDEX `formIdIndex` ON ``.`FormSteps`;--> statement-breakpoint
DROP INDEX `nextStepIdIndex` ON ``.`FormSteps`;--> statement-breakpoint
DROP INDEX `authIdIndex` ON ``.`Profiles`;--> statement-breakpoint
DROP INDEX `profileIdIndex` ON ``.`Tokens`;--> statement-breakpoint
CREATE UNIQUE INDEX `UidAndFormIdUniqueIndex` ON `FormSessions` (`Uid`,`FormId`);--> statement-breakpoint
CREATE INDEX `FormIdIndex` ON `FormSteps` (`FormId`);--> statement-breakpoint
CREATE INDEX `NextStepIdIndex` ON `FormSteps` (`NextStepId`);--> statement-breakpoint
CREATE UNIQUE INDEX `AuthIdIndex` ON `Profiles` (`AuthId`);--> statement-breakpoint
CREATE UNIQUE INDEX `ProfileIdIndex` ON `Tokens` (`ProfileId`);