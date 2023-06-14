import { pgTable, varchar, text } from 'drizzle-orm/pg-core'

export const banks = pgTable('Banks', {
	value: varchar('Bank', { length: 256 }).primaryKey(),
	label: text('Description').notNull()
})
