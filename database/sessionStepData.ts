import { mysqlTable, timestamp, varchar, json, primaryKey } from 'drizzle-orm/mysql-core'
import type { StoredValues } from '../models/formBuilder.model'

export const sessionStepData = mysqlTable(
	'SessionStepData',
	{
		sessionId: varchar('SessionId', { length: 256 }).notNull(),
		stepId: varchar('StepId', { length: 256 }).notNull(),

		storedValues: json('StoredValues').$type<StoredValues | StoredValues[]>(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(SessionStepData) => ({
		sessionId_stepId: primaryKey(SessionStepData.sessionId, SessionStepData.stepId)
	})
)
