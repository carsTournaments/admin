import { CustomTableOptionsModel } from '@components/custom-table/models/custom-table.options-model';
import { AnalyticsGetVisitsDto } from '@services/api/analytics/analytics.dto';
import { AnalyticsGetEventsWithCategoriesResponse } from '@services/api/analytics/analytics.response';

export class StatsViewModel {
    title = 'Estadisticas';
    eventsWithCategories: AnalyticsGetEventsWithCategoriesResponse[] = [];
    optionsTables: CustomTableOptionsModel[] = [];
    dates: any[] = [];
    bodyEventsWithCategoryes: AnalyticsGetVisitsDto = {
        startDate: '7daysAgo',
        endDate: 'today',
    };
}
