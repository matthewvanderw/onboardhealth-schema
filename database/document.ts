import { pgTable, text, uuid, jsonb } from 'drizzle-orm/pg-core'

export const documents = pgTable('Documents', {
	id: uuid('Id').defaultRandom().primaryKey(),
	label: text('Label').notNull(),
	document: jsonb('Document').notNull()
})
