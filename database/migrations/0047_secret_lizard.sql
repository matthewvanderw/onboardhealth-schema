DO $$ BEGIN
 CREATE TYPE "ProductType" AS ENUM('YOURSELF', 'OTHER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Members" (
	"InternalReferenceNumber" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"SessionId" uuid,
	"RefCode" varchar(256),
	"IdentityNumber" varchar(256) NOT NULL,
	"IdentityType" IdentityType NOT NULL,
	"FirstNames" varchar(256),
	"LastName" varchar(256),
	"DateOfBirth" date NOT NULL,
	"Email" varchar(256),
	"ContactNumber" varchar(256),
	"CardNumber" integer,
	"MemberNumber" integer,
	"ProductType" ProductType DEFAULT 'YOURSELF' NOT NULL,
	"ProductName" varchar NOT NULL,
	"ProductCode" varchar NOT NULL,
	"PolicyStatus" policyStatus,
	"PolicySuspensionDate" date,
	"PolicyPurchaseDate" date,
	"BenefitStartDate" date,
	"BenefitEndDate" date,
	"PayorIdentityNumber" varchar,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "InternalReferenceNumberIndex" ON "Members" ("InternalReferenceNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IdentityNumberIndex" ON "Members" ("IdentityNumber");