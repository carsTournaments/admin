export interface UserGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}

export interface UserCreateFakeDto {
    total: number;
}
