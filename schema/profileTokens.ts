import { mysqlTable, primaryKey, varchar } from 'drizzle-orm/mysql-core'

export const profileTokens = mysqlTable(
	'profileTokens',
	{
		profileId: varchar('profileId', { length: 256 }).notNull(),
		tokenId: varchar('tokenId', { length: 256 }).notNull()
	},
	(profileTokens) => ({
		profileId_tokenId: primaryKey(profileTokens.profileId, profileTokens.tokenId)
	})
)
