import { pgTable, text, varchar, uniqueIndex, uuid, jsonb } from 'drizzle-orm/pg-core'
import type { CampaignConfig, CampaignTheme } from '../models/campaign.model'

export const campaigns = pgTable(
	'Campaigns',
	{
		campaignId: varchar('CampaignId').primaryKey(),
		label: text('Label').notNull(),
		formId: uuid('FormId').notNull(),
		theme: jsonb('Theme').$type<CampaignTheme>(),
		config: jsonb('Theme').$type<CampaignConfig>(),
	},
	(campaigns) => ({
		campaignIdIndex: uniqueIndex('CampaignIdIndex').on(campaigns.campaignId)
	})
)
