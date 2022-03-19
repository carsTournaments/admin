import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { BrandService } from 'src/app/services/brand/brand.service';
import { BrandListViewModel } from './model/brand-list.view-model';

@Component({
  selector: 'page-brand-list',
  templateUrl: 'brand-list.page.html',
})
export class BrandListPage implements OnInit {
  vm = new BrandListViewModel();
  constructor(private brandService: BrandService) {}

  ngOnInit() {
    this.getItems();
  }

  async getItems() {
    try {
      this.vm.optionsTable.loading = true;
      this.brandService.getAll().subscribe((items) => {
        this.vm.optionsTable.items = items;
      });
      this.vm.optionsTable.loading = false;
    } catch (error) {
      this.vm.optionsTable.error = true;
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    // TODO: Implementar
    console.log(option);
  }
}
