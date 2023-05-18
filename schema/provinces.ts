import { mysqlTable, text } from 'drizzle-orm/mysql-core'

export const provinces = mysqlTable('provinces', {
	province: text('province').primaryKey(),
	description: text('description').notNull()
})
