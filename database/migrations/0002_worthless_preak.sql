ALTER TABLE "Forms" ALTER COLUMN "DefaultStartingStepId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "FormSteps" ADD COLUMN "FormLabel" text;