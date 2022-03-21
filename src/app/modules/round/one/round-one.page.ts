import { PairingService } from 'src/app/services/pairing/pairing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionForOptionI } from 'src/app/interfaces/action-for-option.interface';
import { RoundService } from 'src/app/services/round/round.service';
import { RoundOnePageViewModel } from './model/round-one.view-model';

@Component({
  selector: 'page-round-one',
  templateUrl: 'round-one.page.html',
})
export class RoundOnePage implements OnInit {
  vm = new RoundOnePageViewModel();
  constructor(
    private route: ActivatedRoute,
    private roundService: RoundService,
    private pairingService: PairingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.vm.id = this.route.snapshot.paramMap.get('id') as string;
    if (this.vm.id) {
      this.vm.optionsTitle.title = 'Editar Ronda';
      this.vm.edit = true;
      this.getPairings();
      this.getOne();
    } else {
      this.vm.optionsTitle.title = 'Nuevo Ronda';
      this.vm.edit = false;
    }
  }

  async getOne() {
    try {
      this.roundService.getOne(this.vm.id).subscribe((item) => {
        this.vm.item = item;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getPairings() {
    this.pairingService.getAllOfRound({ id: this.vm.id }).subscribe({
      next: (items) => (this.vm.pairingsOptionsTable.items = items),
      error: (err) => alert(err),
    });
  }

  async onSubmit() {
    try {
      this.vm.edit
        ? this.roundService.update(this.vm.item).subscribe(() => {
            this.router.navigate(['/rounds']);
          })
        : this.roundService.create(this.vm.item).subscribe(() => {
            alert('Marca creada');
            this.router.navigate(['/rounds']);
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
