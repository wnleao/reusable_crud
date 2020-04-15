import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { STUDENTS_CRUD, COURSES_CRUD, STUDENTS_PATH, COURSES_PATH } from './cruds.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  // https://stackoverflow.com/questions/41471164/angular-2-get-service-by-string-name
  // https://angular.io/guide/dependency-injection-providers
  providers: [
    { provide: STUDENTS_PATH, useValue: STUDENTS_CRUD },
    { provide: COURSES_PATH, useValue: COURSES_CRUD }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
