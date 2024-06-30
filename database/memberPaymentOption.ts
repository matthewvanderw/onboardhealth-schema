import {
    pgTable,
    varchar,
    uuid,
    pgEnum,
    integer,
    serial
} from 'drizzle-orm/pg-core'

export const paymentOption = pgEnum('PaymentOption', [
    'SUB',
    'DO'
])

export const memberPaymentOption = pgTable(
    'MemberPaymentOption',
    {
        id: serial('Id').primaryKey(),
        reference: uuid('reference').defaultRandom().notNull(),
        internalMemberReference: uuid('InternalMemberReference').notNull(),
        email: varchar('Email').notNull(),

        authorizationCode: varchar('AuthorizationCode').default('NA').notNull(),
        paymentOption: paymentOption('PaymentOption').notNull(),
        strikeDate: integer('StrikeDate').default(25).notNull()
    }
)