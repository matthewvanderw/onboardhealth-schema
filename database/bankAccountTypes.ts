import { alias, mysqlTable, text } from 'drizzle-orm/mysql-core'

const table = mysqlTable('BankAccountTypes', {
	type: text('Type').primaryKey(),
	description: text('Description').notNull()
})

export const bankAccountTypes = alias(table, 'bankAccountTypes')
