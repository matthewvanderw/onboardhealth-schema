import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const genders = mysqlTable('Genders', {
	gender: varchar('Gender', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})
