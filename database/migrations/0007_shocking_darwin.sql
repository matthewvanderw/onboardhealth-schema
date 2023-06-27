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
	"CheckSum" varchar NOT NULL,
	"User1" varchar,
	"User2" varchar,
	"User3" varchar,
	"IssuedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "SessionIdIndex" ON "Transactions" ("SessionId");