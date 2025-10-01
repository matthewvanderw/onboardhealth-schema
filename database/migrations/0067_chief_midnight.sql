ALTER TYPE "ContributionStatus" ADD VALUE 'EXPIRED';--> statement-breakpoint
ALTER TYPE "ContributionStatus" ADD VALUE 'DUPLICATE';--> statement-breakpoint
ALTER TABLE "ReportConfigs" ALTER COLUMN "WorkbookConfig" SET DEFAULT '{"sessions":{"forms":[],"keys":[],"reportStatus":[],"status":[],"visible":true},"dependents":false,"transactions":false,"subscriptions":false}'::json;--> statement-breakpoint
ALTER TABLE "ReportConfigs" ALTER COLUMN "ReportSchedule" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "ReportConfigs" ALTER COLUMN "ReportSchedule" SET DEFAULT '0 20 * * *';--> statement-breakpoint
ALTER TABLE "ReportConfigs" ADD COLUMN "Id" serial NOT NULL;--> statement-breakpoint
ALTER TABLE "ReportConfigs" ADD COLUMN "Label" varchar;--> statement-breakpoint
ALTER TABLE "ReportConfigs" ADD COLUMN "ReportInterval" "ReportSchedule" DEFAULT 'daily' NOT NULL;--> statement-breakpoint
ALTER TABLE "ReportConfigs" DROP COLUMN IF EXISTS "Name";--> statement-breakpoint
ALTER TABLE "ReportConfigs" DROP COLUMN IF EXISTS "Options";--> statement-breakpoint
ALTER TABLE "ReportConfigs" DROP COLUMN IF EXISTS "FormList";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "uniq_contrib_sub_invoice_outstanding" ON "Contributions" ("SubscriptionReference","InvoiceDate");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "uniq_contrib_reference" ON "Contributions" ("Reference");