import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
