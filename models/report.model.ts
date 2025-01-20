import { formSessions } from "../database/formSessions"

export type workbookConfig = {
    sessionsFilter: sessionFilter
    dependentsFilter: false | dependentFilter
    transactionsFilter: false | transactionFilter
    subscriptionsFilter: false | subscriptionFilter
}

type sessionFilter = {
    visible: boolean
    forms: string[]
    status: ("active" | "pending" | "complete" | "revoked" | "linked")[]
    reportStatus: string[]
    keys: string[]
}

type dependentFilter = {
    keys: string[]
}

type transactionFilter = {
    keys: string[]
}

type subscriptionFilter = {
    keys: string[]
}