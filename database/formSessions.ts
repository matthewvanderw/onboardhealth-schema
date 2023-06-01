import { pgTable, timestamp, varchar, json, uniqueIndex, pgEnum, uuid } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('Status', ['created', 'active', 'complete', 'revoked'])

export const formSessions = pgTable(
	'FormSessions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		uid: varchar('Uid', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull(),
		currentStepId: varchar('CurrentStepId', { length: 256 }).notNull(),

		storedValues: json('StoredValues').$type<Record<string, string>>(),

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
