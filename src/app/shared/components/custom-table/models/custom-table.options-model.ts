import { OptionItemI } from '@interfaces';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { CustomTableColumnsModel } from './custom-table.columns-model';
import { CustomTableDialogsModel } from './custom-table.dialogs-model';

export class CustomTableOptionsModel {
    type:
        | 'brands'
        | 'cache'
        | 'cars'
        | 'carsUser'
        | 'carsDashboard'
        | 'carStats'
        | 'images'
        | 'inscriptions'
        | 'inscriptionsCar'
        | 'inscriptionsTournament'
        | 'likes'
        | 'likesUser'
        | 'likesCar'
        | 'literals'
        | 'logs'
        | 'menu'
        | 'notifications'
        | 'pairings'
        | 'pairingsTournament'
        | 'reports'
        | 'rounds'
        | 'statsEvents'
        | 'toggles'
        | 'tournaments'
        | 'tournamentsDashboard'
        | 'users'
        | 'usersDashboard'
        | 'votes'
        | 'votesCar'
        | 'votesTournament'
        | 'winners'
        | 'winnersCar' = 'users';
    columns?: MtxGridColumn[] = [];
    items: any[] = [];
    dialog? = false;
    dialogItems?: OptionItemI[] = [];
    loading? = true;
    rowHover? = true;
    rowStriped? = true;
    expandable? = false;
    columnHideable? = false;
    columnResizable? = false;
    columnMovable? = false;
    showToolbar? = false;
    showPaginator? = false;
    showLoadMore? = false;
    showSummary? = false;
    showStatusbar? = false;
    toolbarTitle? = '';
    pageOnFront? = false;
    pageSizeOptions? = [10, 50, 100];
    pageIndex? = 0;
    pageSize? = 5;

    constructor(data?: CustomTableOptionsModel) {
        if (data?.type) {
            this.type = data.type;
            const model = new CustomTableColumnsModel();
            this.columns = model.getColumns(data.type);
        }
        if (data?.dialog && data.dialog === true) {
            const model = new CustomTableDialogsModel();
            this.dialogItems = model.getDialogItems(data.type);
            if (this.dialogItems.length === 0) {
                this.dialog = false;
            }
        }
        this.type = data?.type ?? this.type;
        this.items = data?.items ?? this.items;
        this.dialog = data?.dialog ?? this.dialog;
        this.loading = data?.loading ?? this.loading;
        this.columnHideable = data?.columnHideable ?? this.columnHideable;
        this.columnMovable = data?.columnMovable ?? this.columnMovable;
        this.columnResizable = data?.columnResizable ?? this.columnResizable;
        this.rowHover = data?.rowHover ?? this.rowHover;
        this.rowStriped = data?.rowStriped ?? this.rowStriped;
        this.expandable = data?.expandable ?? this.expandable;
        this.toolbarTitle = data?.toolbarTitle ?? this.toolbarTitle;
        this.showToolbar = data?.showToolbar ?? this.showToolbar;
        this.showPaginator = data?.showPaginator ?? this.showPaginator;
        this.showLoadMore = data?.showLoadMore ?? this.showLoadMore;
        this.showSummary = data?.showSummary ?? this.showSummary;
        this.showStatusbar = data?.showStatusbar ?? this.showStatusbar;
        this.pageOnFront = data?.pageOnFront ?? this.pageOnFront;
        this.pageSizeOptions = data?.pageSizeOptions ?? this.pageSizeOptions;
        this.pageIndex = data?.pageIndex ?? this.pageIndex;
        this.pageSize = data?.pageSize ?? this.pageSize;
    }
}
