import { alias, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

const table = mysqlTable('Titles', {
	title: varchar('Title', { length: 8 }).primaryKey(),
	filter: varchar('Gender', { length: 8 }).notNull(),
	description: text('Description').notNull()
})

export const titles = alias(table, 'titles')
