export interface WinnerGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}

export interface WinnerUpdateDto {
    _id: string;
    tournament: string;
    gold: any; // CarI;
    silver: any; // CarI;
    bronze: any; // CarI;
}
