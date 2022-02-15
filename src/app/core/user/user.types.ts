import { Role } from './roles.types';

export interface User {
    // Personal id
    id: number;

    // Foreign ids
    localisationId?: number;
    localisation?: Localisation;
    clientId?: number;
    client?: Client;

    // Personal information
    firstName: string;
    lastName?: string;
    userName: string;
    phone: string;
    email?: string;
    profile?: string;
    placeOfBirth?: string;
    sexe?: string;
    birthday: string;
    parentEmail: string;

    // Roles
    roles: Array<Role>;

    // Address
    country?: string;
    town?: string;
    street?: string;
    address?: string;
    address1?: string;

    // Booleans
    active: boolean;
    principal: boolean;

    // Timestamps
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
    isDeleted: number;

    // Misc
    name?: string;
    avatar?: string;
    status?: string;
    language?: string;
}

interface Client {

    id: number;

    // Additional informations
    type?: string;
    name?: string;
    statut?: string;
    courriel?: string;
    contactNumberOfCompany?: string;
    businessRegistrationLicense?: string;
    taxPayerCard?: string;
    attestationOfNonIndebtedness?: string;
    localizationPlan?: string;
    idCardManager?: string;
    attestationOfLocalization?: string;
    localisations?: Array<Localisation>;

    // Timestamps
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
}

interface Localisation {

    id: number;
    clientId: number;

    // Timestamps
    createdAt: number;
    updatedAt: number;
    deletedAt: number;

    adresse: string;
    ville: string;
    rue: string;

    longitude: number;
    latitude: number;

    client: any;
}
