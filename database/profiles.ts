import { mysqlTable, text, timestamp, varchar, uniqueIndex, alias } from 'drizzle-orm/mysql-core'

const table = mysqlTable(
	'Profiles',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),

		organisation: text('Organisation').notNull(),
		description: text('Description'),

		authId: varchar('AuthId', { length: 256 }).notNull(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(profiles) => ({
		authIdIndex: uniqueIndex('AuthIdIndex').on(profiles.authId)
	})
)

export const profiles = alias(table, 'profiles')
