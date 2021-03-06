import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppRoutingModule } from './app-routing.module';
import { ShopListModule } from './shop-list/shop-list.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { TodoService } from './todo/todo.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PersonalDataComponent } from './reactive-form/components/personal-data/personal-data.component';
import { CompanyDataComponent } from './reactive-form/components/company-data/company-data.component';
import { StepDirective } from './step.directive';
import { SummaryComponent } from './reactive-form/components/summary/summary.component';
import {UserService} from './shop-list/services/userService';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ReactiveFormComponent,
    PersonalDataComponent,
    StepDirective,
    CompanyDataComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-demo-pre'}),
    HttpModule,
    ReactiveFormsModule,
    ShopListModule,
    AppRoutingModule,
  ],
  providers: [TodoService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [PersonalDataComponent, CompanyDataComponent, SummaryComponent],
})
export class AppModule { }
