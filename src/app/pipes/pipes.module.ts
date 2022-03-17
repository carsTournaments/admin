import { NgModule } from '@angular/core';
import { StarsForListPipe } from './stars-for-list.pipe';
import { DateToTimeAgoPipe } from './timeago.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';

@NgModule({
  declarations: [
    DateToTimeAgoPipe,
    StarsForListPipe,
    TruncateTextPipe,
  ],
  exports: [
    DateToTimeAgoPipe,
    StarsForListPipe,
    TruncateTextPipe,
  ],
})
export class PipesModule {}
