import type { GlobalOptions, Theme } from '../models/form.model'
import { jsonb, pgTable, timestamp, uuid, text } from 'drizzle-orm/pg-core'

export const forms = pgTable('Forms', {
	id: uuid('Id').defaultRandom().primaryKey(),

	defaultStartingStepId: uuid('DefaultStartingStepId').notNull(),
	theme: jsonb('Theme').$type<Theme>(),
	globalOptions: jsonb('GlobalOptions').$type<GlobalOptions>(),
	label: text('Label').notNull().default(''),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
})
