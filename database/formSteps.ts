import type { FormItem } from '../models/formItem.model'
import { mysqlTable, timestamp, varchar, json, index } from 'drizzle-orm/mysql-core'

export const formSteps = mysqlTable(
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
