import { Round, Image } from '@models';
import { TournamentRequisiteI } from '@services/api/tournament/tournament.interface';
import * as moment from 'moment';

export class Tournament {
    _id?: string;
    name: string;
    maxParticipants: number;
    requisites: TournamentRequisiteI[];
    startDate: string;
    endDate: string;
    status?: string;
    durationDays?: number;
    info?: string;
    rounds?: Round[];
    inscriptions: any;
    image: Image;
    created?: string;
    updated?: string;
    constructor(data?: Tournament) {
        this._id = data?._id;
        this.name = data?.name || '';
        this.maxParticipants = data?.maxParticipants || 32;
        this.requisites = data?.requisites || [];
        this.startDate = data?.startDate || moment().format('YYYY-MM-DD HH:mm');
        this.endDate = data?.endDate || '';
        this.status = data?.status || 'Todo';
        this.durationDays = data?.durationDays || 10;
        this.info = data?.info || '';
        this.rounds = data?.rounds || [];
        this.inscriptions = data?.inscriptions || [];
        this.image = data?.image || new Image();
        this.created = data?.created;
        this.updated = data?.updated;
    }

    getRequisitesDefault(): TournamentRequisiteI[] {
        return [
            {
                name: 'Coches Europeos',
                field: 'continent',
                operator: '=',
                value: 'Europa',
            },
            {
                name: 'Coches Americanos',
                field: 'continent',
                operator: '=',
                value: 'America',
            },
            {
                name: 'Coches Asiáticos',
                field: 'continent',
                operator: '=',
                value: 'Asia',
            },
            {
                name: 'Menos de 100CV',
                field: 'cv',
                operator: '<',
                value: 100,
            },
            {
                name: 'Menos de 200CV',
                field: 'cv',
                operator: '<',
                value: 200,
            },
            {
                name: 'Más de 100CV',
                field: 'cv',
                operator: '>',
                value: 100,
            },
            {
                name: 'Más de 200CV',
                field: 'cv',
                operator: '>',
                value: 200,
            },
        ];
    }
}
