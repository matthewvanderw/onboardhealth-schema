import { mysqlTable, varchar, text, alias } from 'drizzle-orm/mysql-core'

const table = mysqlTable('Banks', {
	bank: varchar('Bank', { length: 256 }).primaryKey(),
	description: text('Description').notNull()
})

export const banks = alias(table, 'banks')
