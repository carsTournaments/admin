export interface ImageGetAllDto {
    page: number;
    pageSize: number;
    site: string;
    order: string[];
}

export interface ImageUploadDto {
    type: string;
    id: string;
}
