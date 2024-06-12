import { pgTable, varchar, primaryKey, text } from 'drizzle-orm/pg-core'
import { productSubscriptions } from './productSubscriptions'
import { campaigns } from './campaigns'

export const campaignProducts = pgTable(
	'CampaignProducts',
	{
		productCode: varchar('ProductCode')
			.notNull()
			.references(() => productSubscriptions.productCode),
		groupCode: varchar('GroupCode')
			.notNull()
			.references(() => productSubscriptions.groupCode)
			.default('199'),
		campaignId: varchar('CampaignId')
			.notNull()
			.references(() => campaigns.campaignId),
		signupConversionLabel: text('SignupConversionLabel'),
		submitConversionLabel: text('SubmitConversionLabel')
	},
	(campaignProducts) => ({
		campaignProducts: primaryKey(
			campaignProducts.campaignId,
			campaignProducts.productCode,
			campaignProducts.groupCode
		)
	})
)
