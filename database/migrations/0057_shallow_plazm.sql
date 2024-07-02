DO $$ BEGIN
 CREATE TYPE "ContributionStatus" AS ENUM('CREATED', 'PROCESSING', 'COMPLETE', 'UNSUCCESSFUL', 'FAILED');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Contributions" (
	"Id" serial PRIMARY KEY NOT NULL,
	"PaymentOptionReference" uuid NOT NULL,
	"InvoiceDate" date NOT NULL,
	"CollectionDate" date NOT NULL,
	"status" ContributionStatus DEFAULT 'CREATED' NOT NULL,
	"Amount" numeric(19, 4) NOT NULL,
	"Reference" varchar NOT NULL
);
