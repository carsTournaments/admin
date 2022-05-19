import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatTabsModule,
    ],
    exports: [
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatTabsModule,
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule {}
