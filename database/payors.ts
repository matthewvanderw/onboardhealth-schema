import {
    pgTable,
    timestamp,
    varchar,
    pgEnum,
} from 'drizzle-orm/pg-core'

const identityTypeEnum = pgEnum('IdentityType', ['1', '2'])

export const payors = pgTable(
    'Payors',
    {
        identityNumber: varchar('IdentityNumber').primaryKey(),
        identityType: identityTypeEnum('IdentityType').notNull(),
        fullName: varchar('FullName', { length: 256 }).notNull(),
        email: varchar('Email', { length: 256 }).notNull(),
        contactNumber: varchar('ContactNumber', { length: 256 }),

        lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull(),
        createdAt: timestamp('CreatedAt').defaultNow().notNull(),
    }
)
