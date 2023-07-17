import { pgTable, uuid, timestamp, varchar } from 'drizzle-orm/pg-core'

export const signatures = pgTable('Signatures', {
	id: uuid('Id').defaultRandom().primaryKey(),
	signature: varchar('Signature').notNull(),
	sessionId: uuid('SessionId').notNull(),
	createdAt: timestamp('CreatedAt').notNull().defaultNow()
})

// signature is a JWT containing the following claims:
// {
// 	"sessionId": "a UUID",
//  "documentId": "a UUID",
// 	"signedAt": "a timestamp"
// }
