import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
    imports: [
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    exports: [
        MatSnackBarModule,
        MatDialogModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatTabsModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    declarations: [],
    providers: [],
})
export class AngularMaterialModule {}
