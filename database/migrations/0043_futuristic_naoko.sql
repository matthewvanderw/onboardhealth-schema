ALTER TABLE "Transactions" ALTER COLUMN "SessionId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "TransactionId" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "TransactionId" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "Transactions" ALTER COLUMN "TransactionId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "Campaigns" ADD COLUMN "Config" jsonb;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "AccessCode" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "Reference" varchar;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "Status" text DEFAULT 'not-paid';--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "Fees" numeric(19, 4);--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "Channel" varchar(8);--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "AuthorizationCode" varchar;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "Signature" varchar;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "CreatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "Transactions" ADD COLUMN "PaidAt" timestamp;--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "PaymentRequestId";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "ResultCode";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "StatusCode";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "PaymentMethod";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "PaymentMethodDetail";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "CheckSum";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "User1";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "User2";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "User3";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "TransactionDate";--> statement-breakpoint
ALTER TABLE "Transactions" DROP COLUMN IF EXISTS "UpdatedAt";