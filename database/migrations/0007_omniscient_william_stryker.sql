DROP INDEX IF EXISTS "CampaignProductsUniqueIndex";--> statement-breakpoint
ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_ProductCode" PRIMARY KEY("CampaignId","ProductCode");