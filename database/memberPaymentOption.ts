import {
    pgTable,
    varchar,
    uuid,
    pgEnum,
    integer
} from 'drizzle-orm/pg-core'

export const paymentOption = pgEnum('PaymentOption', [
    'SUB',
    'DO'
])

export const memberPaymentOption = pgTable(
    'MemberPaymentOption',
    {
        id: uuid('Id').defaultRandom().primaryKey(),
        internalReferenceNumber: uuid('InternalReferenceNumber').notNull(),
        email: varchar('Email').notNull(),

        authorizationCode: varchar('AuthorizationCode'),
        paymentOption: paymentOption('PaymentOption').notNull(),
        strikeDate: integer('StrikeDate')
    }
)