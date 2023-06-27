ALTER TABLE "Transactions" RENAME COLUMN "IssuedAt" TO "TransactionDate";--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "TransactionDate" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "CreatedAt" timestamp DEFAULT now() NOT NULL;