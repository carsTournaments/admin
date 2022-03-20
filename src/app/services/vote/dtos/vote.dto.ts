export interface VoteCreateDto {
  name: string;
  country: string;
  image: string;
}

export interface VoteUpdateDto {
  _id: string;
  name: string;
  country: string;
  image: string;
}

export interface VotingDeleteAllDto {
  type: string;
  id?: string;
}
