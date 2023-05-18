import {
	mysqlTable,
	timestamp,
	varchar,
	json,
	uniqueIndex,
	mysqlEnum
} from 'drizzle-orm/mysql-core'

export const formSessions = mysqlTable(
	'FormSessions',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),

		uid: varchar('Uid', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull(),
		startingStepId: varchar('StartingStepId', { length: 256 }).notNull(),

		storedValues: json('StoredValues').$type<Record<string, string>[]>(),

		status: mysqlEnum('Status', ['created', 'active', 'complete', 'revoked'])
			.default('created')
			.notNull(),
		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(formsSessions) => ({
		uidAndFormIdUniqueIndex: uniqueIndex('UidAndFormIdUniqueIndex').on(
			formsSessions.uid,
			formsSessions.formId
		)
	})
)
