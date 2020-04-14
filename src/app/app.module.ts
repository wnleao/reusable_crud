import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsService } from './students/students.service';
import { HttpClientModule } from '@angular/common/http';
import { CoursesService } from './courses/courses.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: 'students', useExisting: StudentsService },
    {provide: 'courses', useExisting: CoursesService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
