ALTER TABLE "Contributions" RENAME COLUMN "RemainingCollectionAttempts" TO "TransactionAttempt";--> statement-breakpoint
ALTER TABLE "Contributions" ALTER COLUMN "TransactionAttempt" SET DEFAULT 0;