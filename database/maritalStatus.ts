import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const maritalStatus = mysqlTable('MaritalStatus', {
	status: varchar('Status', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})
