import { mysqlTable, varchar, primaryKey } from 'drizzle-orm/mysql-core'

export const profileForms = mysqlTable(
	'profileForms',
	{
		profileId: varchar('profileId', { length: 256 }).notNull(),
		formId: varchar('formId', { length: 256 }).notNull()
	},

	(profileForms) => ({
		profileId_formId: primaryKey(profileForms.profileId, profileForms.formId)
	})
)
