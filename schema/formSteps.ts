import type { FormItem } from '$lib/models/formItem.model'
import { mysqlTable, timestamp, varchar, json, index } from 'drizzle-orm/mysql-core'

export const formSteps = mysqlTable(
	'formSteps',
	{
		id: varchar('id', { length: 256 }).primaryKey().notNull(),

		formId: varchar('formId', { length: 256 }).notNull(),
		template: json('template').$type<FormItem[]>().notNull(),
		nextStepId: varchar('nextStepId', { length: 256 }).notNull(),

		createdAt: timestamp('createdAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('lastUpdatedAt').onUpdateNow().notNull()
	},
	(formSteps) => ({
		formIdIndex: index('formIdIndex').on(formSteps.formId),
		nextStepIdIndex: index('nextStepIdIndex').on(formSteps.nextStepId)
	})
)
