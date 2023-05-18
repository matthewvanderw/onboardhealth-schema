import { mysqlTable, text, timestamp, varchar, uniqueIndex } from 'drizzle-orm/mysql-core'

export const profiles = mysqlTable(
	'profiles',
	{
		id: varchar('id', { length: 256 }).primaryKey().notNull(),

		organisation: text('organisation').notNull(),
		description: text('description'),

		authId: varchar('authId', { length: 256 }).notNull(),

		createdAt: timestamp('createdAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('lastUpdatedAt').onUpdateNow().notNull()
	},
	(profiles) => ({
		authIdIndex: uniqueIndex('authIdIndex').on(profiles.authId)
	})
)
