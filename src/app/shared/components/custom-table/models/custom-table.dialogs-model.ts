import { OptionItemI } from '@interfaces';

export class CustomTableDialogsModel {
    private data: any = {
        cars: [
            {
                name: 'Ver perfil',
                value: 'viewCarProfile',
            },
            {
                name: 'Ver marca',
                value: 'viewBrandProfile',
            },
            {
                name: 'Ver piloto',
                value: 'viewDriverProfile',
            },
        ],
        likes: [
            {
                name: 'Ver coche',
                value: 'viewCarProfile',
            },
            {
                name: 'Ver usuario',
                value: 'viewUserProfile',
            },
            {
                name: 'Eliminar like',
                value: 'deleteLike',
            },
        ],
        likesCar: [],
        pairings: [
            {
                name: 'Ver torneo',
                value: 'viewTournament',
            },
            {
                name: 'Ver coche 1',
                value: 'viewCarProfile1',
            },
            {
                name: 'Ver coche 2',
                value: 'viewCarProfile2',
            },
            {
                name: 'Ver ganador',
                value: 'viewCarWinnerProfile',
            },
        ],
        votes: [
            {
                name: 'Ver torneo',
                value: 'viewTournamentProfile',
            },
            {
                name: 'Ver coche',
                value: 'viewCarProfile',
            },
            {
                name: 'Ver usuario',
                value: 'viewUserProfile',
            },
            {
                name: 'Eliminar voto',
                value: 'deleteVote',
            },
        ],
        winners: [
            {
                name: 'Ver oro',
                value: 'viewGoldProfile',
            },
            {
                name: 'Ver plata',
                value: 'viewSilverProfile',
            },
            {
                name: 'Ver bronce',
                value: 'viewBronzeProfile',
            },
            {
                name: 'Ver torneo',
                value: 'viewTournamentProfile',
            },
        ],
        winnersCar: [
            {
                name: 'Ver oro',
                value: 'viewGoldProfile',
            },
            {
                name: 'Ver plata',
                value: 'viewSilverProfile',
            },
            {
                name: 'Ver bronce',
                value: 'viewBronzeProfile',
            },
            {
                name: 'Ver torneo',
                value: 'viewTournamentProfile',
            },
        ],
    };

    getDialogItems(type: string): OptionItemI[] {
        return this.data[type] ?? [];
    }
}
