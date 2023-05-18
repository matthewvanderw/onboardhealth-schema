import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const identityTypes = mysqlTable('identityTypes', {
	identityType: text('identityType').primaryKey(),
	description: text('description').notNull()
})
