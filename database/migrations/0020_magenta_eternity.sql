ALTER TYPE "Status" ADD VALUE 'linked';--> statement-breakpoint
ALTER TABLE "FormSessions" ALTER COLUMN "Status" SET DEFAULT 'active';