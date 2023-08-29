CREATE TABLE IF NOT EXISTS "CampaignProducts" (
	"ProductCode" varchar NOT NULL,
	"CampaignId" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Campaigns" (
	"Id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"CampaignId" varchar NOT NULL,
	"Label" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "Banks" ADD COLUMN "Id" varchar;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_ProductCode_ProductSubscriptions_ProductCode_fk" FOREIGN KEY ("ProductCode") REFERENCES "ProductSubscriptions"("ProductCode") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_ProductSubscriptions_ProductCode_fk" FOREIGN KEY ("CampaignId") REFERENCES "ProductSubscriptions"("ProductCode") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DROP INDEX IF EXISTS "CardNumberIndex";--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "CampaignProductsUniqueIndex" ON "CampaignProducts" ("ProductCode","CampaignId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "CampaignIdIndex" ON "Campaigns" ("CampaignId");