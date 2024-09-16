export type GreydomCreateMember = {
    applicationReferenceNumber: string
    created: string
    createdBy: string
    scheme: Scheme
    intermediatory: ApplicationIntermediatoryDTO
    employerGroup: ApplicationEmployerGroupDTO
    membership: ApplicationMembershipDTO
}

export type ApplicationIntermediatoryDTO = {
    //
}

export type ApplicationEmployerGroupDTO = {
    //
}

export type ApplicationMembershipDTO = {
    //
}

export type Greydom = {
    path: string
    payload: unknown
    method: 'GET' | 'POST'
}

type Contact = {
    contactTypeCode: "PP" | "PE"; // Assuming "PP" and "PE" are the only valid values
    contactValue: string;
    preferred: boolean;
};

type Scheme = {
    schemeCode: string;
    schemeName: string;
};

type SchemeHistory = {
    scheme: Scheme;
    membershipNumber: string;
    startDate: string; // Assuming unixTime returns a number
    endDate: string;   // Assuming unixTime returns a number
    associationCode: string;
};

type Identification = {
    idTypeCode: string; // Could be d.identityType or d.payorIdentityType
    idNumber: string;   // Could be d.identityNumber or d.payorIdentityNumber
    idCountryCode: string; // Default "ZA" if not provided
    isVerified: number; // Assuming 0 or 1
    isAlive: number;   // Assuming 0 or 1
};

export type Person = {
    identification: Identification;
    dependentNumber: string;
    associationCode: string;
    relationshipTypeCode: "SELF" | string; // Assuming "SELF" is a fixed value
    title: string; // Could be d.title or a function result
    firstName: string;
    middleName: string | null;
    lastName: string;
    gender: string; // Assuming gender is a string
    dateOfBirth: string; // Assuming unixTime returns a number
    language: string;
    ethnicity: string;
    maritalStatus: string;
    dateOfMarriage: string | null; // Assuming it could be a string or null
    adoptionDate: string | null; // Assuming it could be a string or null
    receiveHardCopyCard: boolean;
    contacts: Contact[];
    conditions: Record<string, any>; // Adjust as per the actual structure of conditions
    schemeHistory: SchemeHistory[];
};