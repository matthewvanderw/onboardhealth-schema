import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const identityTypes = mysqlTable('IdentityTypes', {
	value: varchar('IdentityType', { length: 16 }).primaryKey(),
	label: text('Description').notNull()
})
