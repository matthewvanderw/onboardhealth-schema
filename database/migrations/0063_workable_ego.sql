ALTER TABLE "SubscriptionPayments" RENAME COLUMN "StartDate" TO "NextRun";--> statement-breakpoint
ALTER TABLE "SubscriptionPayments" ALTER COLUMN "AuthorizationCode" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "SubscriptionPayments" ADD COLUMN "RemainingAttempts" integer DEFAULT 4 NOT NULL;--> statement-breakpoint
ALTER TABLE "Contributions" DROP COLUMN IF EXISTS "CollectionDate";