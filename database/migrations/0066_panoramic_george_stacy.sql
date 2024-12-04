ALTER TABLE "Members" ALTER COLUMN "SessionId" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "SubscriptionPayments" ALTER COLUMN "RemainingAttempts" SET DEFAULT 5;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "SessionId" SET NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "UniqueAuthorizationCodeIndex" ON "SubscriptionPayments" ("AuthorizationCode");