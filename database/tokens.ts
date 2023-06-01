import { pgTable, timestamp, varchar, pgEnum, json, uniqueIndex, uuid } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('Status', ['created', 'revoked', 'expired'])

export const tokens = pgTable(
	'Tokens',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		profileId: varchar('ProfileId', { length: 256 }).notNull(),

		token: json('Token').notNull(),
		status: statusEnum('Status').default('created').notNull(),
		issuedAt: timestamp('IssuedAt').defaultNow().notNull()
	},
	(tokens) => ({
		profileIdIndex: uniqueIndex('ProfileIdIndex').on(tokens.profileId)
	})
)
