import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { StarsForListPipe } from './stars-for-list.pipe';
import { StatusPipe } from './status.pipe';
import { DateToTimeAgoPipe } from './timeago.pipe';
import { TruncateTextPipe } from './truncate-text.pipe';
import { TypePipe } from './type.pipe';

@NgModule({
    declarations: [
        DateToTimeAgoPipe,
        ImagePipe,
        StatusPipe,
        StarsForListPipe,
        TypePipe,
        TruncateTextPipe,
    ],
    exports: [
        DateToTimeAgoPipe,
        ImagePipe,
        StatusPipe,
        StarsForListPipe,
        TypePipe,
        TruncateTextPipe,
    ],
})
export class PipesModule {}
