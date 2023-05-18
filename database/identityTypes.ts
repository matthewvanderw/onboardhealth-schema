import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const identityTypes = mysqlTable('IdentityTypes', {
	identityType: varchar('IdentityType', { length: 16 }).primaryKey(),
	description: text('Description').notNull()
})
