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
	"Description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "FormSessions" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Uid" varchar(256) NOT NULL,
	"FormId" varchar(256) NOT NULL,
	"CurrentStepId" varchar(256) NOT NULL,
	"StoredValues" json,
	"Status" Status DEFAULT 'created' NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "FormSteps" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"FormId" uuid NOT NULL,
	"Template" json NOT NULL,
	"NextStepId" uuid NOT NULL,
	"Action" Action DEFAULT 'default',
	"Options" json DEFAULT '{}'::json NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Forms" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"DefaultStartingStepId" varchar(256) NOT NULL,
	"Theme" json,
	"GlobalOptions" json,
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
	"IdNumber" varchar(256) NOT NULL,
	"FirstNames" varchar(256) NOT NULL,
	"LastName" varchar(256) NOT NULL,
	"DateOfBirth" date,
	"InternalReferenceNumber" varchar(256) NOT NULL,
	"CardNumber" varchar(256),
	"Status" Status DEFAULT 'created' NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProductSubscriptions" (
	"ProductCode" char(8) PRIMARY KEY NOT NULL,
	"MainMember" numeric(10) NOT NULL,
	"Dependant" numeric(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ProfileForms" (
	"ProfileId" varchar(256) NOT NULL,
	"FormId" varchar(256) NOT NULL
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
	"StoredValues" json,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "SessionStepData" ADD CONSTRAINT "SessionStepData_SessionId_StepId" PRIMARY KEY("SessionId","StepId");
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
	"Token" json NOT NULL,
	"Status" Status DEFAULT 'created' NOT NULL,
	"IssuedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "UidAndFormIdUniqueIndex" ON "FormSessions" ("Uid","FormId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "FormIdIndex" ON "FormSteps" ("FormId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "NextStepIdIndex" ON "FormSteps" ("NextStepId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "InternalReferenceNumberIndex" ON "Members" ("InternalReferenceNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "IdNumberIndex" ON "Members" ("IdNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "CardNumberIndex" ON "Members" ("CardNumber");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "AuthIdIndex" ON "Profiles" ("AuthId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "ProfileIdIndex" ON "Tokens" ("ProfileId");