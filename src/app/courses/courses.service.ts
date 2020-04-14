import { Injectable } from '@angular/core';
import { Course } from './course';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends CrudService<Course> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}courses`)
  }
 
  get title() {
    return 'Courses';
  }

}