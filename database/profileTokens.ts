import { mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core'

export const profileTokens = mysqlTable(
	'ProfileTokens',
	{
		profileId: varchar('ProfileId', { length: 256 }).notNull(),
		tokenId: varchar('TokenId', { length: 256 }).notNull()
	},
	(profileTokens) => ({
		profileId_tokenId: primaryKey(profileTokens.profileId, profileTokens.tokenId)
	})
)
