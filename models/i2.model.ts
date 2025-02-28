export type I2CreateMember = {
    uid: string
    sessionId: string
    brokerId?: string
    principalInsured: PrincipalInsured
    payor: Payor
    paymentRequest: PaymentRequest
}

export type I2CreateMemberRes = {
    principalInsured: {
        externalMemberNumber: string
        memberNumber: string
    }
}

export type PrincipalInsured = {
    schemeCode: string
    productCode: string
    groupCode: string
    beneficiaryType: string
    beneficiaryRelationship: string
    title: string
    initials: string
    firstName: string
    lastName: string
    identityType: string
    identityNumber: string
    dateOfBirth: string
    gender: string
    cellphoneNumber: string
    emailAddress: string
    registrationDate: string
    benefitDate: string
    address: {
        addressType: string
        street: string
        suburb: string
        postalCode: string
        province: string
    },
    healthQuestions: {
        previousHospitalAdmissions: string
        expectedAdmission: string
        isPregnant: string
        takesChronicMedication: string
    },
    dependents: DependentsList
    policySignature: string
}

export type DependentsList = {
    beneficiaryType: string
    beneficiaryRelationship: string
    title: string
    initials: string
    firstName: string
    lastName: string
    identityType: string
    identityNumber: string
    dateOfBirth: string
    gender: string
    cellphoneNumber: string
    healthQuestions: {
        previousHospitalAdmissions: string
        expectedAdmission: string
        isPregnant: string
        takesChronicMedication: string
    }
}[]

export type Payor = {
    isPrincipalInsured: boolean
    firstName: string
    lastName: string
    identityType: string
    identityNumber: string
    emailAddress: string
    cellphoneNumber: string
} & PaymentOptions

export type PaymentRequest = {
    paymentId: string | null
    paymentReference: string
    status: string | null
    amount: string
    currency: string
    channel: string | null
    paidAt: Date | null
    createdAt: Date
}

export type PaymentOptions = {
    paymentOption: 'DO'
    debitOrderDetail: {
        accountName: string
        accountUsage: 'C'
        bank: string
        branchCode: string
        accountType: string
        accountNumber: string
        strikeDate: string
        debitOrderSignature: string
    }
} | {
    paymentOption: 'SUB'
    subscriptionDetail: {
        accountName: string
        subscriptionReference: string
        authorizationCode: string
        subscriptionSignature: string
    }
} | {
    paymentOption: 'D'
}

export type I2 = {
    path: string
    payload: unknown
    method: 'GET' | 'POST'
}

export type I2Contribution = {
    externalMemberNumber: string
    subscriptionReference: string
    subsDate: string
}

export type I2ContributionResSuccess = {
    invoiceDate: string
    amount: string
    reference: string
    paymentOption: 'SUB' | 'DO'
    processMessage: string
}
export type I2ContributionResFail = {
    name: 'BusinessException'
    description: string
}

export type I2ConfirmCollection = {
    reference: string
    transactionReference: string
    paymentId: string
    status: 'success' | 'failed'
    amount: string
    currency?: string
    channel: 'card'
    paidAt: Date | null
    createdAt: Date
}

export type I2Eligibility = {
    identityNumber: string
    identityType: string
    dateOfBirth: string
    schemeCode: string
    productGroup: string
}

export type I2EligibilityRes = {
    eligible: string
    reasonMsg: string
    memBenfcEndDate: string
    memBenfcStartDate: string
    memCardNum: string
    memDatePurchased: string
    memProdName: string
    memStatus: "NOT TAKEN UP" | "ACTIVE" | "RESIGNED" | "SUSPENDED"
    memSubsAmt: string
    memSuspensionDate: string
    prodCode: string
}