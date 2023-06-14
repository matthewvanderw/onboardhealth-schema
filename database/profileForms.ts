import { pgTable, varchar, primaryKey, uuid } from 'drizzle-orm/pg-core'

export const profileForms = pgTable(
	'ProfileForms',
	{
		profileId: uuid('ProfileId').notNull(),
		formId: uuid('FormId').notNull()
	},

	(profileForms) => ({
		profileId_formId: primaryKey(profileForms.profileId, profileForms.formId)
	})
)
