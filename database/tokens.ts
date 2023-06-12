import { pgTable, timestamp, varchar, pgEnum, uniqueIndex, uuid, jsonb } from 'drizzle-orm/pg-core'

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
		profileIdIndex: uniqueIndex('ProfileIdIndex').on(tokens.profileId)
	})
)
