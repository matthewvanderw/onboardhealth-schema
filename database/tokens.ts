import {
	mysqlTable,
	timestamp,
	varchar,
	mysqlEnum,
	json,
	uniqueIndex,
	alias
} from 'drizzle-orm/mysql-core'

const table = mysqlTable(
	'Tokens',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),
		profileId: varchar('ProfileId', { length: 256 }).notNull(),

		token: json('Token').notNull(),
		status: mysqlEnum('Status', ['created', 'revoked', 'expired']).default('created').notNull(),
		issuedAt: timestamp('IssuedAt').defaultNow().notNull()
	},
	(tokens) => ({ profileIdIndex: uniqueIndex('ProfileIdIndex').on(tokens.profileId) })
)

export const tokens = alias(table, 'tokens')
