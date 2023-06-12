import { pgTable, timestamp, varchar, primaryKey, jsonb } from 'drizzle-orm/pg-core'

export const sessionStepData = pgTable(
	'SessionStepData',
	{
		sessionId: varchar('SessionId', { length: 256 }).notNull(),
		stepId: varchar('StepId', { length: 256 }).notNull(),

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
