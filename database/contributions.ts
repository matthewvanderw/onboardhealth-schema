import {
    pgTable,
    varchar,
    uuid,
    date,
    decimal
} from 'drizzle-orm/pg-core'

export const contributions = pgTable(
    'Contributions',
    {
        id: uuid('Id').defaultRandom().primaryKey(),
        internalReferenceNumber: uuid('InternalReferenceNumber').notNull(),

        invoiceDate: date('InvoiceDate'),
        amount: decimal('Amount', { precision: 19, scale: 4 }),
        reference: varchar('Reference')
    }
)