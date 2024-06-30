import {
    pgTable,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core'

export const payors = pgTable(
    'Payors',
    {
        identityNumber: varchar('IdentityNumber').primaryKey(),
        identityType: varchar('IdentityType').notNull(),
        fullName: varchar('FullName', { length: 256 }).notNull(),
        email: varchar('Email', { length: 256 }).notNull(),
        contactNumber: varchar('ContactNumber', { length: 256 }),

        lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull(),
        createdAt: timestamp('CreatedAt').defaultNow().notNull(),
    }
)
