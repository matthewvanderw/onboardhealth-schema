import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const titles = mysqlTable('titles', {
	title: text('title').primaryKey(),
	gender: text('gender').notNull(),
	description: text('description').notNull()
})
