import {
	pgTable,
	timestamp,
	varchar,
	pgEnum,
	uniqueIndex,
	date,
	uuid,
	integer
} from 'drizzle-orm/pg-core'

const policyStatusEnum = pgEnum('policyStatus', ['NOT TAKEN UP', 'ACTIVE', 'RESIGNED', 'SUSPENDED'])
const identityTypeEnum = pgEnum('IdentityType', ['1', '2'])
export const productTypeEnum = pgEnum('ProductType', ['YOURSELF', 'OTHER'])

export const members = pgTable(
	'Members',
	{
		internalReferenceNumber: uuid('InternalReferenceNumber').defaultRandom().primaryKey(),
		sessionId: uuid('SessionId'),
		refCode: varchar('RefCode', { length: 256 }),

		identityNumber: varchar('IdentityNumber', { length: 256 }).notNull(),
		identityType: identityTypeEnum('IdentityType').notNull(),
		firstNames: varchar('FirstNames', { length: 256 }),
		lastName: varchar('LastName', { length: 256 }),
		dateOfBirth: date('DateOfBirth', { mode: 'string' }).notNull(),
		email: varchar('Email', { length: 256 }),
		contactNumber: varchar('ContactNumber', { length: 256 }),

		cardNumber: integer('CardNumber'),
		memberNumber: integer('MemberNumber'),

		productType: productTypeEnum('ProductType').default('YOURSELF').notNull(),
		productName: varchar('ProductName').notNull(),
		productCode: varchar('ProductCode').notNull(),

		policyStatus: policyStatusEnum('PolicyStatus'),
		policySuspensionDate: date('PolicySuspensionDate'),
		policyPurchaseDate: date('PolicyPurchaseDate'),

		benefitStartDate: date('BenefitStartDate'),
		benefitEndDate: date('BenefitEndDate'),

		payorIdentityNumber: varchar('PayorIdentityNumber'),

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
