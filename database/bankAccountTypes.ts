import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const bankAccountTypes = mysqlTable('BankAccountTypes', {
	value: text('Type').primaryKey(),
	label: text('Description').notNull()
})
