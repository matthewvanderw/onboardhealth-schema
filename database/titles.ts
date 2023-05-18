import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const titles = mysqlTable('Titles', {
	title: varchar('Title', { length: 8 }).primaryKey(),
	filter: varchar('Filter', { length: 8 }).notNull(),
	description: text('Description').notNull()
})
