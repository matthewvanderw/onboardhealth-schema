import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const genders = mysqlTable('genders', {
	gender: text('gender').primaryKey(),
	description: text('description').notNull()
})
