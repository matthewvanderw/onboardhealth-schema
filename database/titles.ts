import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const titles = pgTable('Titles', {
	value: varchar('Title', { length: 8 }).primaryKey(),
	filter: varchar('Filter', { length: 8 }).notNull(),
	label: text('Description').notNull()
})
