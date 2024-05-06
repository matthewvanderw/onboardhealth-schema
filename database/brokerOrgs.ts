import { pgTable, varchar, text } from 'drizzle-orm/pg-core'

export const brokerOrgs = pgTable('BrokerOrgs', {
    code: varchar('Code').primaryKey(),
    fsbAccreditation: varchar('FsbAccreditation', { length: 256 }),
    name: text('Name').notNull(),
    contactNumber: text('ContactNumber'),
    emailAddress: text('EmailAddress'),
    address: text('Address'),
})