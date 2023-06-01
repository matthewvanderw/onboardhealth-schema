import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const maritalStatus = pgTable('MaritalStatus', {
	value: varchar('Status', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
