import { alias, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

const table = mysqlTable('Provinces', {
	province: varchar('Province', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})

export const provinces = alias(table, 'provinces')
