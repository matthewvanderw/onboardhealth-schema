ALTER TABLE "MemberPaymentOption" ALTER COLUMN "Id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ALTER COLUMN "Id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "MemberPaymentOption" ADD COLUMN "reference" uuid DEFAULT gen_random_uuid();