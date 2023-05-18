import type { Theme } from '$lib/models/master.model'
import { json, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core'

export const forms = mysqlTable('forms', {
	id: varchar('id', { length: 256 }).primaryKey().notNull(),

	defaultStartingStepId: varchar('defaultStartingStepId', { length: 256 }).notNull(),
	theme: json('theme').$type<Theme>(),

	createdAt: timestamp('createdAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('lastUpdatedAt').onUpdateNow().notNull()
})
