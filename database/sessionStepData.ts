import { mysqlTable, timestamp, varchar, json, primaryKey } from 'drizzle-orm/mysql-core'

export const sessionStepData = mysqlTable(
	'SessionStepData',
	{
		sessionId: varchar('SessionId', { length: 256 }).notNull(),
		stepId: varchar('StepId', { length: 256 }).notNull(),

		storedValues: json('StoredValues').$type<
			Record<string, FormDataEntryValue> | Record<string, FormDataEntryValue>[]
		>(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(SessionStepData) => ({
		sessionId_stepId: primaryKey(SessionStepData.sessionId, SessionStepData.stepId)
	})
)
