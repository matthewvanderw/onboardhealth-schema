import { pgTable, text, varchar, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

export const campaigns = pgTable(
	'Campaigns',
	{
		campaignId: varchar('CampaignId').primaryKey(),
		label: text('Label').notNull(),
		formId: uuid('FormId').notNull()
	},
	(campaigns) => ({
		campaignIdIndex: uniqueIndex('CampaignIdIndex').on(campaigns.campaignId)
	})
)
