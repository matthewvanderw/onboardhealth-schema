import { pgTable, varchar, text, integer } from 'drizzle-orm/pg-core'

export const banks = pgTable('Banks', {
	id: varchar('Id'),
	value: varchar('Bank', { length: 256 }).primaryKey(),
	branchCode: varchar('BranchCode', { length: 256 }),
	ranking: integer('Ranking'),
	label: text('Description').notNull()
})
