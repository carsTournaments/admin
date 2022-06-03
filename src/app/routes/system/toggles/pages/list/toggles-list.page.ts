import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toggle } from '@models';
import { ToggleService } from '@services';
import { ToggleListViewModel } from '../../models/toggles-list.view-model';

@Component({
    selector: 'toggles-list',
    templateUrl: 'toggles-list.page.html',
})
export class TogglesListPage {
    vm = new ToggleListViewModel();
    constructor(private toggleService: ToggleService, private router: Router) {}

    ngOnInit() {
        this.getAll();
    }

    async getAll() {
        this.vm.segmentSelected = 0;
        this.vm.optionsTable.loading = true;
        this.toggleService.getAll().subscribe({
            next: (response) => {
                this.vm.optionsTable.items = response;
                this.vm.optionsTable.loading = false;
            },
        });
    }

    onRowClick(event: { rowData: Toggle; index: number }) {
        this.router.navigate([`/system/toggles/one/${event.rowData._id}`]);
    }
}
