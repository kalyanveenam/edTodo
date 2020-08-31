import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [HomeComponent, SignupComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
    path: 'signup',
    loadChildren: () => import('./app/users/users.module').then(u => u.UsersModule)
  ]
})
export class UsersModule { }
