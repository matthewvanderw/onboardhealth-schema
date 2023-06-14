import { pgTable, timestamp, varchar, uniqueIndex, pgEnum, uuid, jsonb } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('Status', ['created', 'active', 'complete', 'revoked'])

export const formSessions = pgTable(
	'FormSessions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		uid: varchar('Uid', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull(),
		currentStepId: uuid('CurrentStepId').notNull(),

		storedValues: jsonb('StoredValues').$type<Record<string, string>>(),

		status: statusEnum('Status').default('created').notNull(),
		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
	},
	(formsSessions) => ({
		uidAndFormIdUniqueIndex: uniqueIndex('UidAndFormIdUniqueIndex').on(
			formsSessions.uid,
			formsSessions.formId
		)
	})
)
