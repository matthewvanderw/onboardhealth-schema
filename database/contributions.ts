import { sql } from 'drizzle-orm'
import {
    pgTable,
    varchar,
    uuid,
    date,
    decimal,
    pgEnum,
    serial,
    uniqueIndex,
    timestamp
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
        createdAt: timestamp('CreatedAt').defaultNow()
    },
    ({ invoiceDate, subscriptionReference, reference }) => ({
        // one OUTSTANDING row per day
        uniqOutstandingPerDay: uniqueIndex('uniq_contrib_sub_invoice_outstanding')
            .on(subscriptionReference, invoiceDate)
            .where(sql`"status" IN ('CREATED','CHARGE_ATTEMPTED')`),

        // (optional) global reference uniqueness
        uniqReference: uniqueIndex('uniq_contrib_reference').on(reference),
    })
)