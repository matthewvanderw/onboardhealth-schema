import type { Options } from '../models/form.model'
import type { FormItem } from '../models/formItem.model'
import { pgTable, timestamp, index, pgEnum, uuid, text, jsonb } from 'drizzle-orm/pg-core'

const actionEnum = pgEnum('Action', ['default', 'push'])

export const formSteps = pgTable(
	'FormSteps',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		formLabel: text('FormLabel'),

		formId: uuid('FormId').notNull(),
		template: jsonb('Template').$type<FormItem[]>().notNull(),
		nextStepId: uuid('NextStepId'),
		action: actionEnum('Action').default('default'),
		options: jsonb('Options').$type<Options>().notNull().default({}),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
	},
	(formSteps) => ({
		formIdIndex: index('FormIdIndex').on(formSteps.formId)
	})
)
