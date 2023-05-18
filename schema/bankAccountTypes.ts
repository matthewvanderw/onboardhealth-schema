import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const bankAccountTypes = mysqlTable('bankAccountTypes', {
	type: text('type').primaryKey(),
	description: text('description').notNull()
})
