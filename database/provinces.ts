import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const provinces = mysqlTable('Provinces', {
	province: varchar('Province', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})
