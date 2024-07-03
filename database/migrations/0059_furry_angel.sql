ALTER TYPE "ContributionStatus" ADD VALUE 'CHARGE_ATTEMPTED';--> statement-breakpoint
ALTER TABLE "Contributions" RENAME COLUMN "PaymentOptionReference" TO "SubscriptionReference";