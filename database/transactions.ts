import {
	pgTable,
	timestamp,
	varchar,
	uniqueIndex,
	uuid,
	integer,
	decimal
} from 'drizzle-orm/pg-core'

export const transactions = pgTable(
	'Transactions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		sessionId: varchar('SessionId', { length: 256 }).notNull(),

		transactionId: varchar('TransactionId', { length: 256 }).notNull(),
		resultCode: integer('ResultCode'),
		statusCode: integer('StatusCode'),

		amount: decimal('Amount', { precision: 19, scale: 4 }).notNull(),
		currency: varchar('Currency', { length: 8 }).notNull().default('ZAR'),
		paymentMethod: varchar('PaymentMethod', { length: 8 }),
		checkSum: varchar('CheckSum').notNull(),

		transactionDate: timestamp('IssuedAt').defaultNow().notNull()
	},
	(transactions) => ({
		sessionIdIndex: uniqueIndex('SessionIdIndex').on(transactions.sessionId)
	})
)
