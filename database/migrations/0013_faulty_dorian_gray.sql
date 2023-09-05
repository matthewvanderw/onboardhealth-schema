CREATE TABLE IF NOT EXISTS "SessionStepData" (
	"SessionId" uuid NOT NULL,
	"StepId" uuid NOT NULL,
	"StoredValues" jsonb,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "SessionStepData" ADD CONSTRAINT "SessionStepData_SessionId_StepId" PRIMARY KEY("SessionId","StepId");
