ALTER TABLE "Transactions" ALTER COLUMN "CheckSum" DROP NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "TransactionIdIndex" ON "Transactions" ("TransactionId");