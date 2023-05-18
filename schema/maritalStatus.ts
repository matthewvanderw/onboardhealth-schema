import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const maritalStatus = mysqlTable('maritalStatus', {
	status: text('status').primaryKey(),
	description: text('description').notNull()
})
