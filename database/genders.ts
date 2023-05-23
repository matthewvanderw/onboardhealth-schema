import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const genders = mysqlTable('Genders', {
	value: varchar('Gender', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
