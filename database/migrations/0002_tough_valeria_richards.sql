ALTER TABLE "Members" ALTER COLUMN "PolicyStatus" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "PolicyStatus" DROP NOT NULL;