import { pgTable, pgEnum, timestamp, varchar, uuid, integer } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('SmsStatus', ['queued', 'sent', 'failed'])

export const sms = pgTable('Sms', {
	id: uuid('Id').defaultRandom().primaryKey(),
	eventId: varchar('EventId', { length: 256 }),

	contactNumber: varchar('ContactNumber', { length: 256 }).notNull(),
	message: varchar('Message', { length: 256 }).notNull(),
	status: statusEnum('Status').default('queued').notNull(),
	cost: integer('Cost').default(0).notNull(),

	createdAt: timestamp('CreatedAt').defaultNow().notNull(),
	lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull()
})
