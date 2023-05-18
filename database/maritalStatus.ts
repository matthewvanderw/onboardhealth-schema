import { alias, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

const table = mysqlTable('MaritalStatus', {
	status: varchar('Status', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})

export const maritalStatus = alias(table, 'maritalStatus')
