export class Voting {
  _id?: string;
  type: string;
  value: string;
  site?: string;
  event?: string;
  created?: string;
  updated?: string;

  constructor(data?: Voting) {
    this._id = data?._id;
    this.type = data?.type || '';
    this.value = data?.value || '1';
    this.site = data?.site;
    this.event = data?.event;
    this.created = data?.created;
    this.updated = data?.updated;
  }
}
