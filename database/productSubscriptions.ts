import { pgTable, char, decimal } from 'drizzle-orm/pg-core'

export const productSubscriptions = pgTable('ProductSubscriptions', {
	productCode: char('ProductCode', { length: 8 }).primaryKey(),
	mainMember: decimal('MainMember', { precision: 10 }).notNull(),
	dependant: decimal('Dependant', { precision: 10 }).notNull()
})
