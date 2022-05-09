export interface IdDto {
    id: string;
}

export interface IdSiteDto {
    id: string;
    site: string;
}

export interface GetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}
