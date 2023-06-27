ALTER TABLE "Transactions" RENAME COLUMN "CreatedAt" TO "UpdatedAt";--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "TransactionDate" SET DEFAULT now();