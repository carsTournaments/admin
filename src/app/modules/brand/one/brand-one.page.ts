import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { BrandService } from 'src/app/services/brand/brand.service';
import { BrandOnePageViewModel } from './model/brand-one.view-model';

@Component({
  selector: 'page-brand-one',
  templateUrl: 'brand-one.page.html',
})
export class BrandOnePage implements OnInit {
  vm = new BrandOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Marca';
      this.vm.edit = true;
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Marca';
      this.vm.edit = false;
    }
  }

  async getOne() {
    try {
      this.brandService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.brandService.update(this.vm.item).subscribe(() => {
            this.router.navigate(['/brands']);
          })
        : this.brandService.create(this.vm.item).subscribe(() => {
            this.router.navigate(['/brands']);
          });
    } catch (error) {
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      case 'delete':
        this.delete();
        break;
      default:
        break;
    }
  }

  async delete() {
    if (confirm('¿Está seguro de eliminar la marca?')) {
      this.brandService.delete(this.vm.id).subscribe({
        next: () => {
          alert('Marca eliminada');
          this.router.navigate(['/brands']);
        },
        error: (e) => console.error(e),
      });
    }
  }
}
