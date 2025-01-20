import { pgTable, jsonb, varchar, pgEnum, json, serial } from 'drizzle-orm/pg-core'
import { workbookConfig } from '../models/report.model'

export const reportSchedule = pgEnum('ReportSchedule', ['daily', 'weekly', 'monthly'])
export const reportType = pgEnum('ReportType', ['full', 'delta', 'requires-action'])

export const reportConfigs = pgTable('ReportConfigs', {
    reportId: serial('Id').primaryKey(),
    label: varchar('Label'),
    workbookConfig: json('WorkbookConfig').$type<workbookConfig>().notNull().default({
        sessions: {
            forms: [],
            keys: [],
            reportStatus: [],
            status: [],
            visible: true
        },
        dependents: false,
        transactions: false,
        subscriptions: false
    }),
    distributionList: jsonb('DistributionList').$type<string[]>().notNull().default([]),
    reportInterval: reportSchedule('ReportInterval').notNull().default('daily'),
    reportSchedule: varchar('ReportSchedule').notNull().default('0 20 * * *'),
    reportType: reportType('ReportType').notNull().default('full')
})
