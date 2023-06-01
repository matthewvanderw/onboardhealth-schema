import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const identityTypes = pgTable('IdentityTypes', {
	value: varchar('IdentityType', { length: 16 }).primaryKey(),
	label: text('Description').notNull()
})
