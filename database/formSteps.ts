import type { FormItem } from '../models/formItem.model'
import { mysqlTable, timestamp, varchar, json, index, alias } from 'drizzle-orm/mysql-core'

const table = mysqlTable(
	'FormSteps',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),

		formId: varchar('FormId', { length: 256 }).notNull(),
		template: json('Template').$type<FormItem[]>().notNull(),
		nextStepId: varchar('NextStepId', { length: 256 }).notNull(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(formSteps) => ({
		formIdIndex: index('FormIdIndex').on(formSteps.formId),
		nextStepIdIndex: index('NextStepIdIndex').on(formSteps.nextStepId)
	})
)

export const formSteps = alias(table, 'formSteps')
