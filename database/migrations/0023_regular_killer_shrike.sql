ALTER TABLE "Reports" ALTER COLUMN "CsvValues" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Reports" ALTER COLUMN "EmailAddresses" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Reports" DROP COLUMN IF EXISTS "TemplateId";