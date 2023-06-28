ALTER TABLE "Members" ALTER COLUMN "PolicyStatus" SET DATA TYPE policyStatus;--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "PayorIdentityNumber" varchar;