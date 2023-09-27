CREATE TABLE IF NOT EXISTS "CampaignForms" (
	"FormId" uuid NOT NULL,
	"CampaignId" varchar NOT NULL,
	"Label" text NOT NULL,
	"Template" jsonb NOT NULL
);
--> statement-breakpoint
ALTER TABLE "CampaignForms" ADD CONSTRAINT "CampaignForms_CampaignId_FormId" PRIMARY KEY("CampaignId","FormId");
--> statement-breakpoint
ALTER TABLE "Campaigns" ADD COLUMN "Theme" jsonb;