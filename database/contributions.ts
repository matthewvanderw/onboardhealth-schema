import {
    pgTable,
    varchar,
    uuid,
    date,
    decimal,
    pgEnum,
    serial,
    integer
} from 'drizzle-orm/pg-core'

export const contributionStatus = pgEnum('ContributionStatus', [
    'CREATED',
    'CHARGE_ATTEMPTED',
    'COMPLETE',
    'FAILED'
])

export const contributions = pgTable(
    'Contributions',
    {
        id: serial('Id').primaryKey(),
        subscriptionReference: uuid('SubscriptionReference').notNull(),

        invoiceDate: date('InvoiceDate').notNull(),
        collectionDate: date('CollectionDate').notNull(),
        transactionAttempt: integer('TransactionAttempt').default(0).notNull(),

        status: contributionStatus('status').notNull().default('CREATED'),
        amount: decimal('Amount', { precision: 19, scale: 4 }).notNull(),
        reference: varchar('Reference').notNull(),
    }
)