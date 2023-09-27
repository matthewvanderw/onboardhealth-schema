import { pgTable, text, varchar, uniqueIndex, uuid, jsonb } from 'drizzle-orm/pg-core'
import type { CampaignTheme } from '../models/campaign.model'

export const campaigns = pgTable(
	'Campaigns',
	{
		campaignId: varchar('CampaignId').primaryKey(),
		label: text('Label').notNull(),
		formId: uuid('FormId').notNull(),
		theme: jsonb('Theme').$type<CampaignTheme>()
	},
	(campaigns) => ({
		campaignIdIndex: uniqueIndex('CampaignIdIndex').on(campaigns.campaignId)
	})
)
