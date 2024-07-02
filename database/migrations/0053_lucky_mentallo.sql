DO $$ BEGIN
 CREATE TYPE "ContributionStatus" AS ENUM('CREATED', 'PROCESSING', 'COMPLETE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "InvoiceDate" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "Amount" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Contributions" ADD COLUMN "CollectionDate" date;--> statement-breakpoint
ALTER TABLE "Contributions" ADD COLUMN "status" "ContributionStatus" DEFAULT 'CREATED' NOT NULL;