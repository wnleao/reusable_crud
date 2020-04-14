import { Injectable } from '@angular/core';
import { Student } from './student';
import { CrudService } from '../shared/crud-service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends CrudService<Student> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}students`)
  }
 
  get title() {
    return 'Students';
  }

}