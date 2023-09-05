CREATE TABLE IF NOT EXISTS "CampaignProducts" (
	"ProductCode" varchar NOT NULL,
	"CampaignId" varchar NOT NULL
);
--> statement-breakpoint
ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_ProductCode" PRIMARY KEY("CampaignId","ProductCode");
