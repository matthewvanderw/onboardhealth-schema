CREATE TABLE IF NOT EXISTS "Campaigns" (
	"CampaignId" varchar PRIMARY KEY NOT NULL,
	"Label" text NOT NULL,
	"FormId" uuid NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "CampaignIdIndex" ON "Campaigns" ("CampaignId");