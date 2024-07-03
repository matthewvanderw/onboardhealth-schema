DO $$ BEGIN
 CREATE TYPE "SubscriptionStatus" AS ENUM('ACTIVE', 'INACTIVE');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" RENAME TO "SubscriptionPayments";--> statement-breakpoint
ALTER TABLE "SubscriptionPayments" RENAME COLUMN "PaymentOption" TO "SubscriptionStatus";--> statement-breakpoint
ALTER TABLE "SubscriptionPayments" ALTER COLUMN "SubscriptionStatus" SET DATA TYPE SubscriptionStatus;