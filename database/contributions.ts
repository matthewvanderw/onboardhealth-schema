import {
    pgTable,
    varchar,
    uuid,
    date,
    decimal,
    pgEnum,
    serial
} from 'drizzle-orm/pg-core'

export const contributionStatus = pgEnum('ContributionStatus', [
    'CREATED',
    'CHARGE_ATTEMPTED',
    'COMPLETE',
    'FAILED',
    'EXPIRED',
    'DUPLICATE'
])

export const contributions = pgTable(
    'Contributions',
    {
        id: serial('Id').primaryKey(),
        subscriptionReference: uuid('SubscriptionReference').notNull(),

        invoiceDate: date('InvoiceDate').notNull(),

        status: contributionStatus('status').notNull().default('CREATED'),
        amount: decimal('Amount', { precision: 19, scale: 4 }).notNull(),
        reference: varchar('Reference').notNull(),
    }
)