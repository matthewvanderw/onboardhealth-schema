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
        transaction_date: Date
        status: string
        reference: string
        channel: string
        fees: number
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