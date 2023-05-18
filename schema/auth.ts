import { mysqlTable, mysqlEnum, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const auth = mysqlTable('auth', {
	id: varchar('id', { length: 256 }).primaryKey().notNull(),

	type: mysqlEnum('type', ['user', 'programmatic']).default('user').notNull(),
	hash: varchar('hash', { length: 256 }).notNull(),

	createdAt: timestamp('createdAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('lastUpdatedAt').onUpdateNow().notNull()
})
