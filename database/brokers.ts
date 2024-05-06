import { pgTable, varchar, text } from 'drizzle-orm/pg-core'
import { brokerOrgs } from './brokerOrgs'

export const brokers = pgTable('Brokers', {
    code: varchar('Code').primaryKey(),
    fsbAccreditation: varchar('FsbAccreditation', { length: 256 }),
    brokerOrg: varchar('BrokerOrg', { length: 256 }).references(() => brokerOrgs.code),
    name: text('Name').notNull(),
    surname: text('Surname').notNull(),
    contactNumber: text('ContactNumber').notNull(),
    emailAddress: text('EmailAddress').notNull(),
    identityNumber: text('IdentityNumber').notNull(),
    address: text('Address').notNull(),
})