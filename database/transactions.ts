import {
	pgTable,
	timestamp,
	varchar,
	uuid,
	integer,
	decimal,
	text,
	index
} from 'drizzle-orm/pg-core'

export const transactions = pgTable(
	'Transactions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		sessionId: varchar('SessionId', { length: 256 }).notNull(),

		transactionId: uuid('TransactionId').defaultRandom().notNull(),
		paymentRequestId: varchar('PaymentRequestId'),
		resultCode: integer('ResultCode'),
		statusCode: integer('StatusCode'),

		amount: decimal('Amount', { precision: 19, scale: 4 }).notNull(),
		currency: varchar('Currency', { length: 8 }).notNull().default('ZAR'),
		paymentMethod: varchar('PaymentMethod', { length: 8 }),
		paymentMethodDetail: text('PaymentMethodDetail'),
		checkSum: varchar('CheckSum'),

		user1: varchar('User1'),
		user2: varchar('User2'),
		user3: varchar('User3'),

		transactionDate: timestamp('TransactionDate').defaultNow().notNull(),
		updatedAt: timestamp('UpdatedAt').defaultNow().notNull()
	},
	(transactions) => ({
		sessionIdIndex: index('SessionIdIndex').on(transactions.sessionId),
		transactionIdIndex: index('TransactionIdIndex').on(transactions.transactionId)
	})
)
