import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toggle } from '@models';
import { LiteralService, SnackBarService } from '@services';
import { LiteralListViewModel } from '../../models/literal-list.view-model';

@Component({
    selector: 'literal-list',
    templateUrl: 'literal-list.page.html',
})
export class LiteralListPage {
    vm = new LiteralListViewModel();
    constructor(
        private literalService: LiteralService,
        private router: Router,
        private snackBarService: SnackBarService
    ) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll(showMore = false) {
        this.vm.optionsTable.loading = true;
        this.literalService.getAll(this.vm.body).subscribe({
            next: (response) => {
                if (!showMore) {
                    this.vm.optionsTable.items = response.items;
                    this.vm.optionsTable.loading = false;
                    this.vm.title = `Literales (${response.paginator.total})`;
                } else {
                    this.vm.optionsTable.items = [
                        ...this.vm.optionsTable.items,
                        ...response.items,
                    ];
                }
            },
            error: (error) => {
                this.vm.optionsTable.loading = false;
                this.snackBarService.open(error);
            },
        });
    }

    onRowClick(event: { rowData: Toggle; index: number }) {
        this.router.navigate([`/system/literals/one/${event.rowData._id}`]);
    }
}
