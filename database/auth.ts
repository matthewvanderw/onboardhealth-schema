import { mysqlTable, mysqlEnum, timestamp, varchar, alias } from 'drizzle-orm/mysql-core'

const table = mysqlTable('Auth', {
	id: varchar('Id', { length: 256 }).primaryKey().notNull(),

	type: mysqlEnum('Type', ['user', 'programmatic']).default('user').notNull(),
	hash: varchar('Hash', { length: 256 }).notNull(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
})

export const auth = alias(table, 'auth')
