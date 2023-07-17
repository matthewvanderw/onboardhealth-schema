CREATE TABLE IF NOT EXISTS "Signatures" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"Signature" varchar NOT NULL,
	"SessionId" uuid NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "ValidationCodes" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"ValidationCode" char(4) NOT NULL,
	"SessionId" uuid NOT NULL,
	"SentTo" varchar NOT NULL,
	"CreatedAt" timestamp DEFAULT now() NOT NULL
);
