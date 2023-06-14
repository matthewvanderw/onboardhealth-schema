import { pgTable, varchar, primaryKey } from 'drizzle-orm/pg-core'

export const profileForms = pgTable(
	'ProfileForms',
	{
		profileId: varchar('ProfileId', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull()
	},

	(profileForms) => ({
		profileId_formId: primaryKey(profileForms.profileId, profileForms.formId)
	})
)
