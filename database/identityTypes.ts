import { alias, mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

const table = mysqlTable('IdentityTypes', {
	identityType: varchar('IdentityType', { length: 16 }).primaryKey(),
	description: text('Description').notNull()
})

export const identityTypes = alias(table, 'identityTypes')
