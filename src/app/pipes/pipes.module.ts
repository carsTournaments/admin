import { NgModule } from '@angular/core';
import { StarsForListPipe } from './stars-for-list.pipe';
import { StatusPipe } from './status.pipe';
import { DateToTimeAgoPipe } from './timeago.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';

@NgModule({
  declarations: [
    DateToTimeAgoPipe,
    StatusPipe,
    StarsForListPipe,
    TruncateTextPipe,
  ],
  exports: [DateToTimeAgoPipe, StatusPipe, StarsForListPipe, TruncateTextPipe],
})
export class PipesModule {}
