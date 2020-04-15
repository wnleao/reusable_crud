import { Injectable } from '@angular/core'
import { CrudService } from './shared/crud-service'
import { HttpClient } from '@angular/common/http'
import { Course } from './courses/course'
import { Student } from './students/student'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends CrudService<Student> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}students`)
  }

}

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends CrudService<Course> {
  
  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}courses`)
  }

}

export const STUDENTS_CRUD = {
  route_path: 'students',
  title: 'Students', 
  service: StudentsService
}
  
export const COURSES_CRUD = {
  route_path: 'courses',
  title: 'Courses', 
  service: CoursesService
}
