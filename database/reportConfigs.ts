import { pgTable, jsonb, varchar, pgEnum, json } from 'drizzle-orm/pg-core'

export const reportSchedule = pgEnum('ReportSchedule', ['daily', 'weekly', 'monthly'])
export const reportType = pgEnum('ReportType', ['full', 'delta', 'requires-action'])

export const reportConfigs = pgTable('ReportConfigs', {
    name: varchar('Name').primaryKey(),
    workbookConfig: json('WorkbookConfig').$type<Record<string, string>>().notNull().default({}),
    options: jsonb('Options').$type<Record<string, string>>().notNull().default({}),
    formList: jsonb('FormList').$type<string[]>().notNull().default([]),
    distributionList: jsonb('DistributionList').$type<string[]>().notNull().default([]),
    reportSchedule: reportSchedule('ReportSchedule').notNull().default('daily'),
    reportType: reportType('ReportType').notNull().default('full')
})
