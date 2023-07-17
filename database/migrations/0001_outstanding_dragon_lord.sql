CREATE TABLE IF NOT EXISTS "Documents" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Label" text NOT NULL,
	"Document" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ProductSubscriptions" ADD COLUMN "ProductName" varchar NOT NULL;