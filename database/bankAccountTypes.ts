import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const bankAccountTypes = mysqlTable('BankAccountTypes', {
	type: text('Type').primaryKey(),
	description: text('Description').notNull()
})
