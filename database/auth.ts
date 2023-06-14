import { pgTable, pgEnum, timestamp, varchar, uuid } from 'drizzle-orm/pg-core'

const typeEnum = pgEnum('Type', ['user', 'programmatic'])

export const auth = pgTable('Auth', {
	id: uuid('Id').defaultRandom().primaryKey(),

	type: typeEnum('Type').default('user').notNull(),
	hash: varchar('Hash', { length: 256 }).notNull(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
})
