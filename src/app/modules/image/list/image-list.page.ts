import { Component, OnInit } from '@angular/core';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { ImageService } from 'src/app/services/image/image.service';
import { ImageListViewModel } from './model/image-list.view-model';

@Component({
  selector: 'page-image-list',
  templateUrl: 'image-list.page.html',
})
export class ImageListPage implements OnInit {
  vm = new ImageListViewModel();
  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getAll();
  }

  async getAll(showMore = false) {
    this.vm.optionsTable.loading = true;
    this.imageService.getAll(this.vm.imageBody).subscribe({
      next: (response) => {
        if (!showMore) {
          this.vm.optionsTable.items = response.items;
          this.vm.optionsTable.loading = false;
          this.vm.optionsTitle.title = `Imagenes (${response.paginator.total})`;
        } else {
          this.vm.optionsTable.items = [
            ...this.vm.optionsTable.items,
            ...response.items,
          ];
        }
      },
      error: (error) => {
        this.vm.optionsTable.error = true;
        console.error(error);
      },
    });
    this.vm.optionsTable.loading = false;
  }

  actionForOption(option: ActionForOptionI) {
    // TODO: Implementar
    console.log(option);
  }

  onChangeOrder(order: string) {
    if (
      !this.vm.imageBody.order ||
      this.vm.imageBody.order.filter((item: string) => item === 'desc').length >
        0
    ) {
      this.vm.imageBody.order = [order, 'asc'];
      this.getAll();
    } else {
      this.vm.imageBody.order = [order, 'desc'];
      this.getAll();
    }
  }

  onChangePage() {
    this.vm.imageBody.page += 1;
    this.getAll(true);
  }
}
