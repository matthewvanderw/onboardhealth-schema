import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core'

export const banks = mysqlTable('Banks', {
	value: varchar('Bank', { length: 256 }).primaryKey(),
	label: text('Description').notNull()
})
