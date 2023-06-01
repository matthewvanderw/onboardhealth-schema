import type { GlobalOptions, Theme } from '../models/form.model'
import { json, pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

export const forms = pgTable('Forms', {
	id: uuid('Id').defaultRandom().primaryKey(),

	defaultStartingStepId: varchar('DefaultStartingStepId', {
		length: 256
	}).notNull(),
	theme: json('Theme').$type<Theme>(),
	globalOptions: json('GlobalOptions').$type<GlobalOptions>(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
})
