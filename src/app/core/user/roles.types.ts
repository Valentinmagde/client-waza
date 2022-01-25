export interface Role {

    id: number;
    name: string;

    // Timestamps
    createdAt: number;
    updatedAt: number;
    deletedAt: number;
}

export enum ROLE_ID {
    SUPER_ADMIN = 1,
    ADMIN = 2,
    CLIENT = 3,
    AGENT_ACCEUIL = 4,
    CHARGE_LOGISTIQUE = 5,
    COMPTABLE = 6,
    COURSIER = 7,
    TRANSPORTEUR = 8,
    AGENT_DISPATCHING = 9
}

export enum ROLE_LEVEL {
    SUPER_ADMIN = 0,
    ADMIN = 1,
    CLIENT = 3,
    AGENT_ACCEUIL = 2,
    CHARGE_LOGISTIQUE = 2,
    COMPTABLE = 2,
    COURSIER = 2,
    TRANSPORTEUR = 2,
    AGENT_DISPATCHING = 2
}

export enum ROLE {
    SUPER_ADMIN = 'SuperAdmin',
    ADMIN = 'Admin',
    CLIENT = 'Client',
    AGENT_ACCEUIL = 'AgentAccueil',
    CHARGE_LOGISTIQUE = 'ChargeLogistique',
    COMPTABLE = 'Comptable',
    COURSIER = 'Coursier',
    TRANSPORTEUR = 'Transporteur',
    AGENT_DISPATCHING = 'AgentDispatching'
}

export enum USER_TYPE {
    PARENT = 'PARENT',
    ELEVE = 'ELEVE',
}

export enum ACCOUNT_TYPE {
    PRINCIPAL = 'PRINCIPAL',
    SECONDARY = 'SECONDARY',
}

export enum NAVIGATION_MODE {
    CASCADE = 'cascade',
    NORMAL = 'normal'
}
