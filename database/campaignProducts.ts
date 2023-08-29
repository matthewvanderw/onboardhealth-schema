import { pgTable, varchar, primaryKey } from 'drizzle-orm/pg-core'

export const campaignProducts = pgTable(
	'CampaignProducts',
	{
		productCode: varchar('ProductCode').notNull(),
		campaignId: varchar('CampaignId').notNull()
	},
	(campaignProducts) => ({
		campaignProducts: primaryKey(campaignProducts.campaignId, campaignProducts.productCode)
	})
)
