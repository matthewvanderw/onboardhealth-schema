import {
	mysqlTable,
	timestamp,
	varchar,
	json,
	uniqueIndex,
	mysqlEnum
} from 'drizzle-orm/mysql-core'

export const formSessions = mysqlTable(
	'formSessions',
	{
		id: varchar('id', { length: 256 }).primaryKey().notNull(),

		uid: varchar('uid', { length: 256 }).notNull(),
		formId: varchar('formId', { length: 256 }).notNull(),
		startingStepId: varchar('startingStepId', { length: 256 }).notNull(),

		storedValues: json('storedValues').$type<Record<string, string>[]>(),

		status: mysqlEnum('status', ['created', 'active', 'complete', 'revoked'])
			.default('created')
			.notNull(),
		createdAt: timestamp('createdAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('lastUpdatedAt').onUpdateNow().notNull()
	},
	(formsSessions) => ({
		uidAndFormIdUniqueIndex: uniqueIndex('uidAndFormIdUniqueIndex').on(
			formsSessions.uid,
			formsSessions.formId
		)
	})
)
