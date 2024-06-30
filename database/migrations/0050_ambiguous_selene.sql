DO $$ BEGIN
 CREATE TYPE "PaymentOption" AS ENUM('SUB', 'DO');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "MemberPaymentOption" (
	"Id" serial PRIMARY KEY NOT NULL,
	"reference" uuid DEFAULT gen_random_uuid(),
	"InternalReferenceNumber" uuid NOT NULL,
	"Email" varchar NOT NULL,
	"AuthorizationCode" varchar,
	"PaymentOption" PaymentOption NOT NULL,
	"StrikeDate" integer
);
