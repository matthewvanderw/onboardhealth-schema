import { alias, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

const table = mysqlTable('Genders', {
	gender: varchar('Gender', { length: 8 }).primaryKey(),
	description: text('description').notNull()
})

export const genders = alias(table, 'genders')
