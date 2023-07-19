import {
	pgTable,
	timestamp,
	varchar,
	pgEnum,
	uniqueIndex,
	date,
	uuid,
	decimal,
	integer
} from 'drizzle-orm/pg-core'

const policyStatusEnum = pgEnum('policyStatus', ['NOT TAKEN UP', 'ACTIVE', 'RESIGNED', 'SUSPENDED'])
const identityTypeEnum = pgEnum('IdentityType', ['1', '2'])
const productTypeEnum = pgEnum('ProductType', ['yourself', 'other'])

export const members = pgTable(
	'Members',
	{
		id: uuid('Id').defaultRandom().primaryKey(),

		identityNumber: varchar('IdentityNumber', { length: 256 }).notNull(),
		identityType: identityTypeEnum('IdentityType').notNull(),
		firstNames: varchar('FirstNames', { length: 256 }),
		lastName: varchar('LastName', { length: 256 }),
		dateOfBirth: date('DateOfBirth', { mode: 'string' }).notNull(),

		internalReferenceNumber: uuid('InternalReferenceNumber').defaultRandom().notNull(),
		cardNumber: integer('CardNumber'),
		premiumAmount: decimal('PremiumAmount', { precision: 19, scale: 4 }).notNull(),

		productType: productTypeEnum('ProductType').default('yourself').notNull(),
		productName: varchar('ProductName').notNull(),
		productCode: varchar('ProductCode').notNull(),

		policyStatus: policyStatusEnum('PolicyStatus'),
		policySuspensionDate: date('PolicySuspensionDate'),
		policyPurchaseDate: date('PolicyPurchaseDate'),

		benefitStartDate: date('BenefitStartDate'),
		benefitEndDate: date('BenefitEndDate'),

		payorIdentityNumber: varchar('PayorIdentityNumber'),

		lastUpdatedAt: timestamp('LastUpdatedAt').defaultNow().notNull(),
		createdAt: timestamp('CreatedAt').defaultNow().notNull()
	},
	(members) => ({
		internalReferenceNumberIndex: uniqueIndex('InternalReferenceNumberIndex').on(
			members.internalReferenceNumber
		),
		identityNumberIndex: uniqueIndex('IdentityNumberIndex').on(members.identityNumber),
		cardNumberIndex: uniqueIndex('CardNumberIndex').on(members.cardNumber)
	})
)
