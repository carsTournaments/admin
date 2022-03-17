export class Tournament {
    _id?: string;
    name: string;
    maxParticipants: number;
    requisites: TournamentRequisiteI[];
    startDate: string;
    endDate: string;
    rounds?: any[]; // Virtual
    inscriptions?: any; // CarI[]
    created?: string;
    updated?: string;
    constructor(data?: Tournament) {
        this._id = data?._id;
        this.name = data?.name || '';
        this.maxParticipants = data?.maxParticipants || 0;
        this.requisites = data?.requisites || [];
        this.startDate = data?.startDate || '';
        this.endDate = data?.endDate || '';
        this.rounds = data?.rounds || [];
        this.inscriptions = data?.inscriptions || [];
        this.created = data?.created;
        this.updated = data?.updated;
    }
}

export interface TournamentRequisiteI {
    name: string;
    value: string;
}
