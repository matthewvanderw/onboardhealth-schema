import { pgTable, text, varchar } from 'drizzle-orm/pg-core'

export const bankAccountTypes = pgTable('BankAccountTypes', {
	value: varchar('Type').primaryKey(),
	label: text('Description').notNull()
})
