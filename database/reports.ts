import { pgTable, jsonb, uuid, varchar } from 'drizzle-orm/pg-core'

export const reports = pgTable('Reports', {
	name: varchar('Name').primaryKey(),
	formId: uuid('FormId').notNull(),
	csvValues: jsonb('CsvValues').$type<Record<string, string>>().notNull().default({}),
	options: jsonb('Options').$type<Record<string, string>>().notNull().default({}),
	emailAddresses: jsonb('EmailAddresses').$type<string[]>().notNull().default([])
})
