import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const relationships = mysqlTable('Relationships', {
	value: text('Relation').primaryKey(),
	label: text('Description').notNull()
})
