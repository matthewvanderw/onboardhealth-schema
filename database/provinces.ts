import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const provinces = mysqlTable('Provinces', {
	value: varchar('Province', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
