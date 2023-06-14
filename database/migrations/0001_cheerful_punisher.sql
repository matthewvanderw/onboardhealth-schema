ALTER TABLE "FormSessions" ALTER COLUMN "CurrentStepId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "FormSteps" ALTER COLUMN "NextStepId" DROP NOT NULL;