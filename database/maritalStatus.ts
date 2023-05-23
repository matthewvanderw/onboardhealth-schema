import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const maritalStatus = mysqlTable('MaritalStatus', {
	value: varchar('Status', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
