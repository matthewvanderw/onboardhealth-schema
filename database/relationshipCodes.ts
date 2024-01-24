import { pgTable, char, varchar, primaryKey } from 'drizzle-orm/pg-core'

export const relationshipCodes = pgTable(
    'RelationshipCodes',
    {
        productCode: char('ProductCode', { length: 8 }).notNull(),
        groupCode: varchar('GroupCode').notNull().default(''),
        mainMemberCode: varchar('MainMemberCode').default('M').notNull(),
        mainMember65Code: varchar('MainMember65Code').default('M').notNull(),
        dependant65Code: varchar('Dependant65Code').default('D').notNull(),
        dependantAdultCode: varchar('DependantAdultCode').default('D').notNull(),
        dependantCode: varchar('DependantCode').default('D').notNull(),
        studentCode: varchar('StudentCode').default('D').notNull()
    },
    (relationshipCodes) => ({
        relationshipCodesPrimaryKey: primaryKey(relationshipCodes.productCode, relationshipCodes.groupCode)
    })
)
