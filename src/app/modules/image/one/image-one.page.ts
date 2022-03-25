import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image/image.service';
import { ImageOnePageViewModel } from './model/image-one.view-model';

@Component({
  selector: 'page-image-one',
  templateUrl: 'image-one.page.html',
})
export class ImageOnePage implements OnInit {
  vm = new ImageOnePageViewModel();
  constructor(private imageService: ImageService, private router: Router) {}

  ngOnInit() {
    this.vm.optionsTitle.title = 'Nuevo Inscripcion';
    this.vm.edit = false;
  }

  async getOne() {
    this.imageService.getOne(this.vm.id).subscribe({
      next: (item) => (this.vm.item = item),
      error: (error) => console.error(error),
    });
  }

  async onSubmit() {
    try {
      this.imageService.update(this.vm.item).subscribe(() => {
        alert('Imagen actualizada');
        this.router.navigate(['/images']);
      });
    } catch (error) {
      console.error(error);
    }
  }
}
