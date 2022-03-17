export interface VotingGetAllDto {
  page: number;
  pageSize: number;
  type: string;
  order: string[];
  site: string;
  id?: string;
}
