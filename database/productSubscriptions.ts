import { pgTable, char, decimal, varchar, json } from 'drizzle-orm/pg-core'

export const productSubscriptions = pgTable('ProductSubscriptions', {
	productCode: char('ProductCode', { length: 8 }).primaryKey(),
	schemeCode: varchar('SchemeCode').notNull().default(''),
	groupCode: varchar('GroupCode').notNull().default(''),
	productName: varchar('ProductName').primaryKey(),
	productDescription: varchar('ProductDescription').notNull().default(''),
	productBenefits: json('ProductBenefits').notNull().$type<string[]>().default([]),
	mainMember: decimal('MainMember', { precision: 10 }).notNull(),
	mainMember65: decimal('MainMember65', { precision: 10 }).notNull(),
	dependant65: decimal('Dependant65', { precision: 10 }).notNull(),
	dependantAdult: decimal('DependantAdult', { precision: 10 }).notNull(),
	dependant: decimal('Dependant', { precision: 10 }).notNull(),
	student: decimal('Student', { precision: 10 }).default('0').notNull()
})
