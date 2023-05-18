import {
	mysqlTable,
	timestamp,
	varchar,
	mysqlEnum,
	json,
	uniqueIndex
} from 'drizzle-orm/mysql-core'

export const tokens = mysqlTable(
	'tokens',
	{
		id: varchar('id', { length: 256 }).primaryKey().notNull(),
		profileId: varchar('profileId', { length: 256 }).notNull(),

		token: json('token').notNull(),
		status: mysqlEnum('status', ['created', 'revoked', 'expired']).default('created').notNull(),
		issuedAt: timestamp('issuedAt').defaultNow().notNull()
	},
	(tokens) => ({ profileIdIndex: uniqueIndex('profileIdIndex').on(tokens.profileId) })
)
