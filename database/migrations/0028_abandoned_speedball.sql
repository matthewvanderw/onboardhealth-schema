CREATE TABLE IF NOT EXISTS "Sms" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"EventId" varchar(256),
	"ContactNumber" varchar(256) NOT NULL,
	"Message" varchar(256) NOT NULL,
	"Status" SmsStatus DEFAULT 'queued' NOT NULL,
	"Cost" integer DEFAULT 0 NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL,
	"LastUpdatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "ShortCodes" ALTER COLUMN "LinkedSessionId" DROP NOT NULL;