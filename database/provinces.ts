import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const provinces = pgTable('Provinces', {
	value: varchar('Province', { length: 8 }).primaryKey(),
	label: text('Description').notNull()
})
