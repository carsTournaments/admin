export interface RoundGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}

export interface RoundCreateAutomaticsRoundsDto {
    tournamentId: string;
}

export interface RoundUpdateDto {
    _id: string;
    name: string;
    participants: number;
    tournament: any; // TournamentI
    startDate: string;
    endDate: string;
    finished: string;
}
