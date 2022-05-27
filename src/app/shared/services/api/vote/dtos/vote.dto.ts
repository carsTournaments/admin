export interface VoteGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}

export interface VoteCreateDto {
    pairing: string;
    round: string;
    tournament: string;
    car: string;
}

export interface VoteUpdateDto {
    _id: string;
    pairing: string;
    round: string;
    tournament: string;
    car: string;
}

export interface VotingDeleteAllDto {
    type: string;
    id?: string;
}
