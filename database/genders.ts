import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const genders = pgTable('Genders', {
	value: varchar('Gender', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
