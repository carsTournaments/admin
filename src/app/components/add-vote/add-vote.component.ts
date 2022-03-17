import { Voting } from 'src/app/models/voting.model';
import { VotingService } from 'src/app/services/voting/voting.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'add-vote',
  templateUrl: 'add-vote.component.html',
})
export class AddVoteComponent {
  @Input() item: any;
  @Input() type = 'site';
  data = new Voting();
  @Output() onVoted = new EventEmitter();
  constructor(private votingService: VotingService) { }

  async submit() {
    try {
      if (Number(this.data.value) > 5) {
        return alert('El valor máximo permitido es 5');
      }
      this.data.type = this.type;
      this.type === 'site'
        ? (this.data.site = this.item._id)
        : (this.data.event = this.item._id);
      this.data.value = this.data.value.toString();
      await this.votingService.create(this.data);
      this.onVoted.emit(this.data);
      window.alert('Voto registrado');
    } catch (error) {
      console.error(error);
    }
  }
}
