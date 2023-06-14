import { pgTable, timestamp, varchar, pgEnum, uniqueIndex, date, uuid } from 'drizzle-orm/pg-core'

const statusEnum = pgEnum('Status', ['created', 'active', 'complete', 'revoked'])

export const members = pgTable(
	'Members',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		idNumber: varchar('IdNumber', { length: 256 }).notNull(),
		firstNames: varchar('FirstNames', { length: 256 }).notNull(),
		lastName: varchar('LastName', { length: 256 }).notNull(),
		dateOfBirth: date('DateOfBirth', { mode: 'string' }),

		internalReferenceNumber: varchar('InternalReferenceNumber', { length: 256 }).notNull(),
		cardNumber: varchar('CardNumber', { length: 256 }),

		status: statusEnum('Status').default('created').notNull(),
		createdAt: timestamp('CreatedAt').defaultNow().notNull()
	},
	(members) => ({
		internalReferenceNumberIndex: uniqueIndex('InternalReferenceNumberIndex').on(
			members.internalReferenceNumber
		),
		idNumberIndex: uniqueIndex('IdNumberIndex').on(members.idNumber),
		cardNumberIndex: uniqueIndex('CardNumberIndex').on(members.cardNumber)
	})
)
