import type { Options } from '../models/form.model'
import type { FormItem } from '../models/formItem.model'
import { pgTable, timestamp, json, index, pgEnum, uuid, uniqueIndex } from 'drizzle-orm/pg-core'

const actionEnum = pgEnum('Action', ['default', 'push'])

export const formSteps = pgTable(
	'FormSteps',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		formId: uuid('FormId').notNull(),
		template: json('Template').$type<FormItem[]>().notNull(),
		nextStepId: uuid('NextStepId').notNull(),
		action: actionEnum('Action').default('default'),
		options: json('Options').$type<Options>().notNull().default({}),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
	},
	(formSteps) => ({
		formIdIndex: index('FormIdIndex').on(formSteps.formId),
		nextStepIdIndex: uniqueIndex('NextStepIdIndex').on(formSteps.nextStepId)
	})
)
