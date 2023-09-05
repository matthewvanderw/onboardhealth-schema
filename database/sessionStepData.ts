import { pgTable, timestamp, primaryKey, jsonb, uuid } from 'drizzle-orm/pg-core'

export const sessionStepData = pgTable(
	'SessionStepData',
	{
		sessionId: uuid('SessionId').notNull(),
		stepId: uuid('StepId').notNull(),

		storedValues: jsonb('StoredValues').$type<
			Record<string, FormDataEntryValue> | Record<string, FormDataEntryValue>[]
		>(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
	},
	(SessionStepData) => ({
		sessionId_stepId: primaryKey(SessionStepData.sessionId, SessionStepData.stepId)
	})
)
