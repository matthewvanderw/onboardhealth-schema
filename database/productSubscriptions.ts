import { mysqlTable, char, decimal } from 'drizzle-orm/mysql-core'

export const productSubscriptions = mysqlTable('ProductSubscriptions', {
	productCode: char('ProductCode', { length: 8 }).primaryKey(),
	mainMember: decimal('MainMember', { precision: 10 }).notNull(),
	dependant: decimal('Dependant', { precision: 10 }).notNull()
})
