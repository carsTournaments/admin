import { StatsResumeI } from '../../../interfaces/stats.interface';
export class StatsOptionsModel {
    items: StatsResumeI[] = [];
    type = '';
    loading = true;
    error = false;

    constructor(data?: StatsOptionsModel) {
        if (data) {
            this.items = data.items;
            this.type = data.type;
            this.loading = data.loading;
            this.error = data.error;
        }
    }
}
