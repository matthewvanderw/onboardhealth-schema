ALTER TABLE "CampaignProducts" ADD COLUMN "SignupConversionLabel" text;--> statement-breakpoint
ALTER TABLE "CampaignProducts" ADD COLUMN "SubmitConversionLabel" text;--> statement-breakpoint
ALTER TABLE "Campaigns" ADD COLUMN "Config" jsonb;