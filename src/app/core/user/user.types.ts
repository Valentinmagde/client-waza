import { Role } from './roles.types';
import { Classes } from '../classes/classes.types';
import { Schools } from '../schools/schools.types';

export interface User {
    // Personal id
    id: number;

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

    // Booleans
    active: boolean;

    // Timestamps
    createdAt: number;
    updatedAt: number;

    class: Classes;
    school: Schools;
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
