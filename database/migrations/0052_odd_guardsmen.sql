ALTER TABLE "Members" RENAME COLUMN "ProductName" TO "SchemeCode";--> statement-breakpoint
ALTER TABLE "Dependents" ALTER COLUMN "IdentityType" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "reference" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "AuthorizationCode" SET DEFAULT 'NA';--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "AuthorizationCode" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "StrikeDate" SET DEFAULT 25;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "StrikeDate" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "IdentityType" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "FirstNames" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "LastName" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "CardNumber" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "MemberNumber" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Members" ALTER COLUMN "PayorIdentityNumber" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "Payors" ALTER COLUMN "IdentityType" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "Members" ADD COLUMN "GroupCode" varchar NOT NULL;