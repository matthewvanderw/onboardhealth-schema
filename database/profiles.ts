import { pgTable, text, timestamp, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

export const profiles = pgTable(
	'Profiles',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		organisation: text('Organisation').notNull(),
		description: text('Description'),

		authId: uuid('AuthId').notNull(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
	},
	(profiles) => ({
		authIdIndex: uniqueIndex('AuthIdIndex').on(profiles.authId)
	})
)
