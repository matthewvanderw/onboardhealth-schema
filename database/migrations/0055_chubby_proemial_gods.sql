ALTER TYPE "ContributionStatus" ADD VALUE 'UNSUCCESSFUL';--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "Id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "Id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "CollectionDate" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "Reference" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "SessionId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ADD COLUMN "SubAccount" varchar;