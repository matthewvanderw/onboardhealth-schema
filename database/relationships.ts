import { mysqlTable, text, varchar } from 'drizzle-orm/mysql-core'

export const relationships = mysqlTable('Relationships', {
	relation: varchar('Relation', { length: 8 }).primaryKey(),
	description: text('Description').notNull()
})
