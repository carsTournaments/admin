import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { ServicesModule } from 'src/app/services/services.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ServicesModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
        data: { title: 'Login' },
      },
    ]),
  ],
  declarations: [LoginPage],
  providers: [],
})
export class LoginModule {}
