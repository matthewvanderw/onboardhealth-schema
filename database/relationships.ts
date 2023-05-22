import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const relationships = mysqlTable('Relationships', {
	relation: text('Relation').primaryKey(),
	description: text('Description').notNull()
})
