import { pgTable, uuid, char, timestamp, varchar } from 'drizzle-orm/pg-core'

export const validationCodes = pgTable('ValidationCodes', {
	id: uuid('Id').defaultRandom().primaryKey(),
	validationCode: char('ValidationCode', { length: 4 }).notNull(),
	validated: char('Validated', { length: 1 }).notNull().default('N'),
	sessionId: uuid('SessionId').notNull(),
	sentTo: varchar('SentTo').notNull(),
	label: varchar('Label').notNull(),
	createdAt: timestamp('CreatedAt').notNull().defaultNow()
})
