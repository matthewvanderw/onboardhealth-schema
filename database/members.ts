import {
	pgTable,
	timestamp,
	varchar,
	pgEnum,
	uniqueIndex,
	date,
	uuid,
} from 'drizzle-orm/pg-core'

const policyStatusEnum = pgEnum('policyStatus', ['NOT TAKEN UP', 'ACTIVE', 'RESIGNED', 'SUSPENDED'])
export const productTypeEnum = pgEnum('ProductType', ['YOURSELF', 'OTHER'])

export const members = pgTable(
	'Members',
	{
		internalReferenceNumber: uuid('InternalReferenceNumber').defaultRandom().primaryKey(),
		sessionId: uuid('SessionId').notNull(),
		refCode: varchar('RefCode', { length: 256 }),

		identityNumber: varchar('IdentityNumber', { length: 256 }).notNull(),
		identityType: varchar('IdentityType').notNull(),
		firstNames: varchar('FirstNames', { length: 256 }).notNull(),
		lastName: varchar('LastName', { length: 256 }).notNull(),
		dateOfBirth: date('DateOfBirth', { mode: 'string' }).notNull(),
		email: varchar('Email', { length: 256 }),
		contactNumber: varchar('ContactNumber', { length: 256 }),

		cardNumber: varchar('CardNumber'),
		memberNumber: varchar('MemberNumber'),

		productType: productTypeEnum('ProductType').default('YOURSELF').notNull(),
		productCode: varchar('ProductCode').notNull(),
		schemeCode: varchar('SchemeCode').notNull(),
		groupCode: varchar('GroupCode').notNull(),

		policyStatus: policyStatusEnum('PolicyStatus'),
		policySuspensionDate: date('PolicySuspensionDate'),
		policyPurchaseDate: date('PolicyPurchaseDate'),

		benefitStartDate: date('BenefitStartDate'),
		benefitEndDate: date('BenefitEndDate'),

		payorIdentityNumber: varchar('PayorIdentityNumber').notNull(),

		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull(),
		createdAt: timestamp('CreatedAt').defaultNow().notNull(),

	},
	(members) => ({
		internalReferenceNumberIndex: uniqueIndex('InternalReferenceNumberIndex').on(
			members.internalReferenceNumber
		),
		identityNumberIndex: uniqueIndex('IdentityNumberIndex').on(members.identityNumber)
	})
)
