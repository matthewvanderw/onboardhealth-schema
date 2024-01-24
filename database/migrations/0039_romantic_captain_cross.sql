CREATE TABLE IF NOT EXISTS "RelationshipCodes" (
	"ProductCode" char(8) NOT NULL,
	"GroupCode" varchar DEFAULT '' NOT NULL,
	"MainMemberCode" varchar DEFAULT 'M' NOT NULL,
	"MainMember65Code" varchar DEFAULT 'M' NOT NULL,
	"Dependant65Code" varchar DEFAULT 'D' NOT NULL,
	"DependantAdultCode" varchar DEFAULT 'D' NOT NULL,
	"DependantCode" varchar DEFAULT 'D' NOT NULL,
	"StudentCode" varchar DEFAULT '0' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "RelationshipCodes" ADD CONSTRAINT "RelationshipCodes_ProductCode_GroupCode" PRIMARY KEY("ProductCode","GroupCode");
--> statement-breakpoint
ALTER TABLE "CampaignProducts" DROP CONSTRAINT "CampaignProducts_CampaignId_ProductCode";--> statement-breakpoint
ALTER TABLE "CampaignProducts" ADD CONSTRAINT "CampaignProducts_CampaignId_ProductCode_GroupCode" PRIMARY KEY("CampaignId","ProductCode","GroupCode");