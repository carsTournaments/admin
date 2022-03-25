export class CustomTableOptionsModel {
  type:
    | 'brand'
    | 'car'
    | 'user'
    | 'image'
    | 'inscription'
    | 'pairing'
    | 'round'
    | 'tournament'
    | 'vote' = 'user';
  items: any[] = [];
  showLoadMore = false;
  loading = true;
  error = false;
  constructor(data?: CustomTableOptionsModel) {
    if (data) {
      this.type = data.type ?? this.type;
      this.items = data.items ?? this.items;
      this.loading = data.loading ?? this.loading;
      this.error = data.error ?? this.error;
      this.showLoadMore = data.showLoadMore ?? this.showLoadMore;
    }
  }
}
