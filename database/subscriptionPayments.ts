import {
    pgTable,
    varchar,
    uuid,
    pgEnum,
    integer,
    serial,
    date
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

        nextRun: date('NextRun').notNull(),
        strikeDate: integer('StrikeDate').default(25).notNull(),
        remainingAttempts: integer('RemainingAttempts').default(4).notNull(),

        subAccount: varchar('SubAccount'),
        authorizationCode: varchar('AuthorizationCode').notNull(),
        subscriptionStatus: subscriptionStatus('SubscriptionStatus').notNull(),
    }
)