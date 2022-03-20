import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { VoteService } from 'src/app/services/vote/vote.service';
import { VoteOnePageViewModel } from './model/vote-one.view-model';

@Component({
  selector: 'page-vote-one',
  templateUrl: 'vote-one.page.html',
})
export class VoteOnePage implements OnInit {
  vm = new VoteOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private voteService: VoteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Voto';
      this.vm.edit = true;
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Voto';
      this.vm.edit = false;
    }
  }

  async getOne() {
    try {
      this.voteService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.voteService.update(this.vm.item).subscribe(() => {
            this.router.navigate(['/votes']);
          })
        : this.voteService.create(this.vm.item).subscribe(() => {
            alert('Marca creada');
            this.router.navigate(['/votes']);
          });
    } catch (error) {
      console.error(error);
    }
  }

  actionForOption(option: ActionForOptionI) {
    switch (option.value) {
      default:
        break;
    }
  }
}
