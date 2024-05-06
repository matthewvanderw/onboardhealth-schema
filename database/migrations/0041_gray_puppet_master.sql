CREATE TABLE IF NOT EXISTS "BrokerOrgs" (
	"Code" varchar PRIMARY KEY NOT NULL,
	"FsbAccreditation" varchar(256),
	"Name" text NOT NULL,
	"ContactNumber" text,
	"EmailAddress" text,
	"Address" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Brokers" (
	"Code" varchar PRIMARY KEY NOT NULL,
	"FsbAccreditation" varchar(256),
	"BrokerOrg" varchar(256),
	"Name" text NOT NULL,
	"Surname" text NOT NULL,
	"ContactNumber" text NOT NULL,
	"EmailAddress" text NOT NULL,
	"IdentityNumber" text NOT NULL,
	"Address" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "FormSessions" ADD COLUMN "RefCode" varchar(256);--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "SessionId" uuid;--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "RefCode" varchar(256);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Brokers" ADD CONSTRAINT "Brokers_BrokerOrg_BrokerOrgs_Code_fk" FOREIGN KEY ("BrokerOrg") REFERENCES "BrokerOrgs"("Code") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
