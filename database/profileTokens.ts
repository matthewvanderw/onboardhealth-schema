import { pgTable, primaryKey, uuid, varchar } from 'drizzle-orm/pg-core'

export const profileTokens = pgTable(
	'ProfileTokens',
	{
		profileId: uuid('ProfileId').notNull(),
		tokenId: uuid('TokenId').notNull()
	},
	(profileTokens) => ({
		profileId_tokenId: primaryKey(profileTokens.profileId, profileTokens.tokenId)
	})
)
