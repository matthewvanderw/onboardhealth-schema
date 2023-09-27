import { pgTable, varchar, primaryKey, uuid, text, jsonb } from 'drizzle-orm/pg-core'
import type { CampaignTemplate } from '../models/campaign.model'

export const campaignForms = pgTable(
	'CampaignForms',
	{
		formId: uuid('FormId').notNull(),
		campaignId: varchar('CampaignId').notNull(),
		label: text('Label').notNull(),
		template: jsonb('Template').$type<CampaignTemplate>().notNull()
	},
	(campaignProducts) => ({
		campaignProducts: primaryKey(campaignProducts.campaignId, campaignProducts.formId)
	})
)
