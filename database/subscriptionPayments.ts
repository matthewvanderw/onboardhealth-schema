import {
    pgTable,
    varchar,
    uuid,
    pgEnum,
    integer,
    serial
} from 'drizzle-orm/pg-core'

export const subscriptionStatus = pgEnum('SubscriptionStatus', [
    'ACTIVE',
    'INACTIVE'
])

export const subscriptionPayments = pgTable(
    'SubscriptionPayments',
    {
        id: serial('Id').primaryKey(),
        reference: uuid('reference').defaultRandom().notNull(),
        internalMemberReference: uuid('InternalMemberReference').notNull(),
        email: varchar('Email').notNull(),
        subAccount: varchar('SubAccount'),

        authorizationCode: varchar('AuthorizationCode').default('NA').notNull(),
        subscriptionStatus: subscriptionStatus('SubscriptionStatus').notNull(),
        strikeDate: integer('StrikeDate').default(25).notNull()
    }
)