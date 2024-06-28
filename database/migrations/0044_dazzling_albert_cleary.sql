DO $$ BEGIN
 CREATE TYPE "PaymentOption" AS ENUM('SUB', 'DO');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "TransactionType" AS ENUM('UPFRONT', 'RECURRING');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Contributions" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"InternalReferenceNumber" uuid NOT NULL,
	"InvoiceDate" date,
	"Amount" numeric(19, 4),
	"Reference" varchar
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Dependents" (
	"IdentityNumber" varchar PRIMARY KEY NOT NULL,
	"PrincipalIdentityNumber" varchar(256) NOT NULL,
	"IdentityType" IdentityType NOT NULL,
	"FirstNames" varchar(256) NOT NULL,
	"LastName" varchar(256) NOT NULL,
	"ContactNumber" varchar(256),
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "MemberPaymentOption" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"InternalReferenceNumber" uuid NOT NULL,
	"Email" varchar NOT NULL,
	"AuthorizationCode" varchar,
	"PaymentOption" PaymentOption NOT NULL,
	"StrikeDate" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Payors" (
	"IdentityNumber" varchar PRIMARY KEY NOT NULL,
	"IdentityType" IdentityType NOT NULL,
	"FullName" varchar(256) NOT NULL,
	"Email" varchar(256) NOT NULL,
	"ContactNumber" varchar(256),
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Members" ADD PRIMARY KEY ("InternalReferenceNumber");--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "ProductType" SET DEFAULT 'YOURSELF';--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "AccessCode" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "Reference" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "Email" varchar(256);--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "ContactNumber" varchar(256);--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "MemberNumber" integer;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "CustomerCode" varchar;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "TransactionType" "TransactionType" DEFAULT 'UPFRONT' NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" DROP COLUMN IF EXISTS "Id";--> statement-breakpoint
ALTER TABLE "Members" DROP COLUMN IF EXISTS "PremiumAmount";