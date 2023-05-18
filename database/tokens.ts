import {
	mysqlTable,
	timestamp,
	varchar,
	mysqlEnum,
	json,
	uniqueIndex
} from 'drizzle-orm/mysql-core'

export const tokens = mysqlTable(
	'Tokens',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),
		profileId: varchar('ProfileId', { length: 256 }).notNull(),

		token: json('Token').notNull(),
		status: mysqlEnum('Status', ['created', 'revoked', 'expired']).default('created').notNull(),
		issuedAt: timestamp('IssuedAt').defaultNow().notNull()
	},
	(tokens) => ({
		profileIdIndex: uniqueIndex('ProfileIdIndex').on(tokens.profileId)
	})
)
