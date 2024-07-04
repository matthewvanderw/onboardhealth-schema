ALTER TABLE "SubscriptionPayments" ADD COLUMN "StartDate" date NOT NULL;--> statement-breakpoint
ALTER TABLE "Contributions" DROP COLUMN IF EXISTS "TransactionAttempt";