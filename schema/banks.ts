import { mysqlTable, varchar, text } from 'drizzle-orm/mysql-core'

export const banks = mysqlTable('banks', {
	bank: varchar('bank', { length: 256 }).primaryKey(),
	description: text('description').notNull()
})
