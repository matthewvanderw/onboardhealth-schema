import type { Theme } from '../models/master.model'
import { json, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const forms = mysqlTable('Forms', {
	id: varchar('Id', { length: 256 }).primaryKey().notNull(),

	defaultStartingStepId: varchar('DefaultStartingStepId', {
		length: 256
	}).notNull(),
	theme: json('Theme').$type<Theme>(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
})
