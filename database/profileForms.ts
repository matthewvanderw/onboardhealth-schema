import { mysqlTable, varchar, primaryKey } from 'drizzle-orm/mysql-core'

export const profileForms = mysqlTable(
	'ProfileForms',
	{
		profileId: varchar('ProfileId', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull()
	},

	(profileForms) => ({
		profileId_formId: primaryKey(profileForms.profileId, profileForms.formId)
	})
)
