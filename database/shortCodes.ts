import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core'

export const shortCodes = pgTable('ShortCodes', {
	shortCode: varchar('ShortCode').notNull().primaryKey(),
	sessionId: uuid('SessionId').notNull()
})

// signature is a JWT containing the following claims:
// {
// 	"sessionId": "a UUID",
//  "documentId": "a UUID",
// 	"signedAt": "a timestamp"
// }
