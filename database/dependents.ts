import {
    pgTable,
    timestamp,
    varchar,
    pgEnum,
} from 'drizzle-orm/pg-core'

const identityTypeEnum = pgEnum('IdentityType', ['1', '2'])

export const dependents = pgTable(
    'Dependents',
    {
        identityNumber: varchar('IdentityNumber').primaryKey(),
        principalIdentityNumber: varchar('PrincipalIdentityNumber', { length: 256 }).notNull(),
        identityType: identityTypeEnum('IdentityType').notNull(),
        firstNames: varchar('FirstNames', { length: 256 }).notNull(),
        lastName: varchar('LastName', { length: 256 }).notNull(),
        contactNumber: varchar('ContactNumber', { length: 256 }),

        lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull(),
        createdAt: timestamp('CreatedAt').defaultNow().notNull(),
    }
)
