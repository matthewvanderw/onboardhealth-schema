ALTER TABLE "FormSessions" ALTER COLUMN "StoredValues" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "FormSteps" ALTER COLUMN "Template" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "FormSteps" ALTER COLUMN "Options" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "FormSteps" ALTER COLUMN "Options" SET DEFAULT '{}'::jsonb;--> statement-breakpoint
ALTER TABLE "Forms" ALTER COLUMN "Theme" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "Forms" ALTER COLUMN "GlobalOptions" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "SessionStepData" ALTER COLUMN "StoredValues" SET DATA TYPE jsonb;--> statement-breakpoint
ALTER TABLE "Tokens" ALTER COLUMN "Token" SET DATA TYPE jsonb;