ALTER TABLE "Reports" ALTER COLUMN "CsvValues"
SET
DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "Reports" ALTER COLUMN "EmailAddresses"
SET
DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "Reports" ADD COLUMN "Options" jsonb DEFAULT '{}'::jsonb NOT NULL;--> statement-breakpoint
