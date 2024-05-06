DO $$ BEGIN
 CREATE TYPE "ReportSchedule" AS ENUM('daily', 'weekly', 'monthly');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "ReportType" AS ENUM('full', 'delta', 'requires-action');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ReportConfigs" (
	"Name" varchar PRIMARY KEY NOT NULL,
	"WorkbookConfig" json DEFAULT '{}'::json NOT NULL,
	"Options" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"FormList" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"DistributionList" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"ReportSchedule" reportschedule DEFAULT 'daily' NOT NULL,
	"ReportType" ReportType DEFAULT 'full' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "RelationshipCodes" ALTER COLUMN "StudentCode" SET DEFAULT 'D';--> statement-breakpoint
ALTER TABLE "FormSessions" ADD COLUMN "RequiredActions" jsonb;--> statement-breakpoint
ALTER TABLE "FormSessions" ADD COLUMN "LastReportedAt" timestamp;