DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_Campaigns_CampaignId_fk" FOREIGN KEY ("CampaignId") REFERENCES "Campaigns"("CampaignId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "CampaignProducts" DROP CONSTRAINT "CampaignProducts_CampaignId_ProductSubscriptions_ProductCode_fk";
