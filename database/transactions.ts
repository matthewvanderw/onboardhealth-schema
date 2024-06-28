import {
	pgTable,
	timestamp,
	varchar,
	uuid,
	integer,
	decimal,
	index,
	text
} from 'drizzle-orm/pg-core'

export const transactions = pgTable(
	'Transactions',
	{
		id: uuid('Id').defaultRandom().primaryKey(),
		sessionId: uuid('SessionId').notNull(),

		accessCode: varchar('AccessCode').notNull(),
		reference: varchar('Reference'),
		transactionId: varchar('TransactionId'),

		status: text('Status').default('not-paid'),
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