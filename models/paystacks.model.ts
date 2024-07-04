export type ChargeAuthorization = {
    amount: string
    email: string
    authorizationCode: string
    reference: string
    subAccount: string | null
}

export type ChargeAuthorizationRes = {
    status: boolean
    message: string
    data: {
        amount: number
        currency: string
        created_at: string | null
        transaction_date: string | null
        paid_at: string | null
        status: 'success' | 'queued' | 'failed' | 'pending'
        reference: string
        channel: string
        fees: number | null
        authorization: {
            authorization_code: string
            signature: string
        }
        customer: {
            customer_code: string
        }
        id: number
    }
}

export type Config = {
    path: string
    method: 'POST'
    payload: unknown
} | {
    path: string
    method: 'GET'
}