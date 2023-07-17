CREATE TABLE IF NOT EXISTS "Auth" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Type" Type DEFAULT 'user' NOT NULL,
	"Hash" varchar(256) NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "BankAccountTypes" (
	"Type" varchar PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Banks" (
	"Bank" varchar(256) PRIMARY KEY NOT NULL,
	"BranchCode" varchar(256),
	"Ranking" integer,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Documents" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Label" text NOT NULL,
	"Document" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "FormSessions" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Uid" varchar(256) NOT NULL,
	"FormId" varchar(256) NOT NULL,
	"CurrentStepId" uuid NOT NULL,
	"StoredValues" jsonb,
	"Status" Status DEFAULT 'created' NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "FormSteps" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"FormLabel" text,
	"FormId" uuid NOT NULL,
	"Template" jsonb NOT NULL,
	"NextStepId" uuid,
	"Action" Action DEFAULT 'default',
	"Options" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Forms" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"DefaultStartingStepId" uuid NOT NULL,
	"Theme" jsonb,
	"GlobalOptions" jsonb,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Genders" (
	"Gender" varchar(8) PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "IdentityTypes" (
	"IdentityType" varchar(16) PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "MaritalStatus" (
	"Status" varchar(8) PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Members" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"IdentityNumber" varchar(256) NOT NULL,
	"IdentityType" IdentityType NOT NULL,
	"FirstNames" varchar(256) NOT NULL,
	"LastName" varchar(256) NOT NULL,
	"DateOfBirth" date,
	"InternalReferenceNumber" uuid DEFAULT gen_random_uuid() NOT NULL,
	"CardNumber" integer,
	"PremiumAmount" numeric(19, 4) NOT NULL,
	"ProductType" ProductType DEFAULT 'yourself' NOT NULL,
	"ProductName" varchar NOT NULL,
	"ProductCode" varchar NOT NULL,
	"PolicyStatus" policyStatus DEFAULT 'pending' NOT NULL,
	"PolicySuspensionDate" date,
	"PolicyPurchaseDate" date,
	"BenefitStartDate" date,
	"BenefitEndDate" date,
	"PayorIdentityNumber" varchar,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProductSubscriptions" (
	"ProductCode" char(8) PRIMARY KEY NOT NULL,
	"ProductName" varchar PRIMARY KEY NOT NULL,
	"MainMember" numeric(10) NOT NULL,
	"Dependant" numeric(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProfileForms" (
	"ProfileId" uuid NOT NULL,
	"FormId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ProfileForms" ADD CONSTRAINT "ProfileForms_ProfileId_FormId" PRIMARY KEY("ProfileId","FormId");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProfileTokens" (
	"ProfileId" uuid NOT NULL,
	"TokenId" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ProfileTokens" ADD CONSTRAINT "ProfileTokens_ProfileId_TokenId" PRIMARY KEY("ProfileId","TokenId");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Profiles" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Organisation" text NOT NULL,
	"Description" text,
	"AuthId" uuid NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Provinces" (
	"Province" varchar(8) PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Relationships" (
	"Relation" varchar PRIMARY KEY NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "SessionStepData" (
	"SessionId" varchar(256) NOT NULL,
	"StepId" varchar(256) NOT NULL,
	"StoredValues" jsonb,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "SessionStepData" ADD CONSTRAINT "SessionStepData_SessionId_StepId" PRIMARY KEY("SessionId","StepId");
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Signatures" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Signature" varchar NOT NULL,
	"SessionId" uuid NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Titles" (
	"Title" varchar(8) PRIMARY KEY NOT NULL,
	"Filter" varchar(8) NOT NULL,
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Tokens" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ProfileId" varchar(256) NOT NULL,
	"Token" jsonb NOT NULL,
	"Status" Status DEFAULT 'created' NOT NULL,
	"IssuedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Transactions" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"SessionId" varchar(256) NOT NULL,
	"TransactionId" uuid DEFAULT gen_random_uuid() NOT NULL,
	"PaymentRequestId" varchar,
	"ResultCode" integer,
	"StatusCode" integer,
	"Amount" numeric(19, 4) NOT NULL,
	"Currency" varchar(8) DEFAULT 'ZAR' NOT NULL,
	"PaymentMethod" varchar(8),
	"PaymentMethodDetail" text,
	"CheckSum" varchar,
	"User1" varchar,
	"User2" varchar,
	"User3" varchar,
	"TransactionDate" timestamp DEFAULT now() NOT NULL,
	"UpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ValidationCodes" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ValidationCode" char(4) NOT NULL,
	"Validated" char(1) DEFAULT 'N' NOT NULL,
	"SessionId" uuid NOT NULL,
	"SentTo" varchar NOT NULL,
	"Label" varchar NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "UidAndFormIdUniqueIndex" ON "FormSessions" ("Uid","FormId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "FormIdIndex" ON "FormSteps" ("FormId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "InternalReferenceNumberIndex" ON "Members" ("InternalReferenceNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IdentityNumberIndex" ON "Members" ("IdentityNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "CardNumberIndex" ON "Members" ("CardNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "AuthIdIndex" ON "Profiles" ("AuthId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "ProfileIdIndex" ON "Tokens" ("ProfileId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "SessionIdIndex" ON "Transactions" ("SessionId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "TransactionIdIndex" ON "Transactions" ("TransactionId");