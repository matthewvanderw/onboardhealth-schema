import { pgTable, char, decimal, varchar, json, primaryKey } from 'drizzle-orm/pg-core'

export const productSubscriptions = pgTable(
	'ProductSubscriptions',
	{
		productCode: char('ProductCode', { length: 8 }).notNull(),
		schemeCode: varchar('SchemeCode').notNull().default('').notNull(),
		groupCode: varchar('GroupCode').notNull().default(''),
		subAccount: varchar('SubAccount'),
		productName: varchar('ProductName').primaryKey(),
		productDescription: varchar('ProductDescription').notNull().default(''),
		productBenefits: json('ProductBenefits')
			.notNull()
			.$type<
				{
					label: string
					available: boolean
				}[]
			>()
			.default([]),
		mainMember: decimal('MainMember', { precision: 10 }).notNull(),
		mainMember65: decimal('MainMember65', { precision: 10 }).notNull(),
		dependant65: decimal('Dependant65', { precision: 10 }).notNull(),
		dependantAdult: decimal('DependantAdult', { precision: 10 }).notNull(),
		dependant: decimal('Dependant', { precision: 10 }).notNull(),
		student: decimal('Student', { precision: 10 }).default('0').notNull()
	},
	(productSubs) => ({
		productSubscriptionsPrimaryKey: primaryKey(productSubs.productCode, productSubs.groupCode)
	})
)
