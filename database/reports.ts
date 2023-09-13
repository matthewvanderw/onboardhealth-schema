import { pgTable, jsonb, uuid, varchar } from 'drizzle-orm/pg-core'
import { forms } from './forms'

export const reports = pgTable('Reports', {
	name: varchar('Name').primaryKey(),
	formId: uuid('FormId')
		.references(() => forms.id)
		.notNull(),
	csvValues: jsonb('CsvValues').$type<Record<string, string>>().notNull(),
	emailAddresses: jsonb('EmailAddresses').$type<string[]>().notNull()
})
