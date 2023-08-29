ALTER TABLE "CampaignProducts" ALTER COLUMN "CampaignId"
SET DATA TYPE
varchar;--> statement-breakpoint
ALTER TABLE "Campaigns" ADD PRIMARY KEY ("CampaignId");--> statement-breakpoint
ALTER TABLE "Campaigns" DROP COLUMN IF EXISTS "Id";