import { mysqlTable, mysqlEnum, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const auth = mysqlTable('Auth', {
	id: varchar('Id', { length: 256 }).primaryKey().notNull(),

	type: mysqlEnum('Type', ['user', 'programmatic']).default('user').notNull(),
	hash: varchar('Hash', { length: 256 }).notNull(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
})
