export type CreateMember = {
    uid: string
    sessionId: string
    principalInsured: PrincipalInsured
    payor: Payor
    paymentRequest: PaymentRequest
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
}