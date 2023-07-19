ALTER TABLE "FormSessions" ALTER COLUMN "FormId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "FirstNames" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "LastName" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "DateOfBirth" SET NOT NULL;