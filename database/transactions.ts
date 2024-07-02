import {
	pgTable,
	timestamp,
	varchar,
	uuid,
	decimal,
	index,
	text,
	pgEnum
} from 'drizzle-orm/pg-core'

export const type = pgEnum('TransactionType', [
	'UPFRONT',
	'RECURRING'
])

export const transactions = pgTable(
	'Transactions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		sessionId: uuid('SessionId'),

		accessCode: varchar('AccessCode'),
		reference: varchar('Reference').notNull(),
		transactionId: varchar('TransactionId'),
		customerCode: varchar('CustomerCode'),

		status: text('Status').default('not-paid'),
		transactionType: type('TransactionType').default('UPFRONT').notNull(),

		amount: decimal('Amount', { precision: 19, scale: 4 }).notNull(),
		fees: decimal('Fees', { precision: 19, scale: 4 }),
		currency: varchar('Currency', { length: 8 }).notNull().default('ZAR'),
		channel: varchar('Channel', { length: 8 }),

		authorizationCode: varchar('AuthorizationCode'),
		signature: varchar('Signature'),

		createdAt: timestamp('CreatedAt').defaultNow().notNull(),
		paidAt: timestamp('PaidAt')
	},
	(transactions) => ({
		sessionIdIndex: index('SessionIdIndex').on(transactions.sessionId),
		transactionIdIndex: index('TransactionIdIndex').on(transactions.transactionId)
	})
)