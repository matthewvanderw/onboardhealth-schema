import { mysqlTable, varchar, primaryKey, alias } from 'drizzle-orm/mysql-core'

const table = mysqlTable(
	'ProfileForms',
	{
		profileId: varchar('ProfileId', { length: 256 }).notNull(),
		formId: varchar('FormId', { length: 256 }).notNull()
	},

	(profileForms) => ({
		profileId_formId: primaryKey(profileForms.profileId, profileForms.formId)
	})
)

export const profileForms = alias(table, 'profileForms')
