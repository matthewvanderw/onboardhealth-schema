ALTER TABLE "ProductSubscriptions" ALTER COLUMN "ProductCode" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "CampaignProducts" ADD COLUMN "GroupCode" varchar DEFAULT '199' NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_ProductCode_ProductSubscriptions_ProductCode_fk" FOREIGN KEY ("ProductCode") REFERENCES "ProductSubscriptions"("ProductCode") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_GroupCode_ProductSubscriptions_GroupCode_fk" FOREIGN KEY ("GroupCode") REFERENCES "ProductSubscriptions"("GroupCode") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_Campaigns_CampaignId_fk" FOREIGN KEY ("CampaignId") REFERENCES "Campaigns"("CampaignId") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
