import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const shortCodes = pgTable('ShortCodes', {
	shortCode: varchar('ShortCode').notNull().primaryKey(),
	sessionId: uuid('SessionId').notNull(),
	linkedSessionId: uuid('LinkedSessionId'),
	password: varchar('Password')
})
