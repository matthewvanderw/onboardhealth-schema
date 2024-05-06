import { pgTable, timestamp, varchar, pgEnum, uuid, jsonb } from 'drizzle-orm/pg-core'

export const statusEnum = pgEnum('Status', ['active', 'complete', 'revoked', 'linked'])

export const formSessions = pgTable('FormSessions', {
	id: uuid('Id').defaultRandom().primaryKey(),

	uid: varchar('Uid', { length: 256 }).notNull(),
	refCode: varchar('RefCode', { length: 256 }),
	formId: uuid('FormId').notNull(),
	currentStepId: uuid('CurrentStepId').notNull(),

	storedValues: jsonb('StoredValues').$type<Record<string, string>>(),
	requiredActions: jsonb('RequiredActions').$type<Record<string, string>[]>(),

	status: statusEnum('Status').default('active').notNull(),
	reportStatus: varchar('ReportStatus', { length: 256 }),
	lastReportedAt: timestamp('LastReportedAt'),
	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
})
