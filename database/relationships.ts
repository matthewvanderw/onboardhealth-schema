import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const relationships = pgTable('Relationships', {
	value: varchar('Relation').primaryKey(),
	label: text('Description').notNull()
})
