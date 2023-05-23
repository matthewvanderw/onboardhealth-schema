import type { FormItem } from '../models/formItem.model'
import type { StepOptions } from '../models/master.model'
import { mysqlTable, timestamp, varchar, json, index, mysqlEnum } from 'drizzle-orm/mysql-core'

export const formSteps = mysqlTable(
	'FormSteps',
	{
		id: varchar('Id', { length: 256 }).primaryKey().notNull(),

		formId: varchar('FormId', { length: 256 }).notNull(),
		template: json('Template').$type<FormItem[]>().notNull(),
		nextStepId: varchar('NextStepId', { length: 256 }).notNull(),
		action: mysqlEnum('Action', ['default', 'push']).default('default'),
		options: json('Options').$type<StepOptions>(),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').onUpdateNow().notNull()
	},
	(formSteps) => ({
		formIdIndex: index('FormIdIndex').on(formSteps.formId),
		nextStepIdIndex: index('NextStepIdIndex').on(formSteps.nextStepId)
	})
)
