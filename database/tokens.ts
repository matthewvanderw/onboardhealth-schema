import { pgTable, timestamp, varchar, pgEnum, uuid, jsonb, index } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('Status', ['created', 'active', 'complete', 'revoked'])

export const tokens = pgTable(
	'Tokens',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		profileId: varchar('ProfileId', { length: 256 }).notNull(),

		token: jsonb('Token').notNull(),
		status: statusEnum('Status').default('created').notNull(),
		issuedAt: timestamp('IssuedAt').defaultNow().notNull()
	},
	(tokens) => ({
		profileIdIndex: index('ProfileIdIndex').on(tokens.profileId)
	})
)
