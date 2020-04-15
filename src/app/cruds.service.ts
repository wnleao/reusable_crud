import { Injectable } from '@angular/core'
import { CrudService } from './shared/crud-service'
import { HttpClient } from '@angular/common/http'
import { Course } from './courses/course'
import { Student } from './students/student'
import { environment } from 'src/environments/environment'

export const STUDENTS_PATH = 'students';
export const COURSES_PATH = 'courses';

export const ROUTE_PATHS = [
  STUDENTS_PATH, 
  COURSES_PATH
]

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends CrudService<Student> {

  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}${STUDENTS_PATH}`)
  }

}

@Injectable({
  providedIn: 'root'
})
export class CoursesService extends CrudService<Course> {
  
  constructor(private httpClient: HttpClient) { 
    super(httpClient, `${environment.API}${COURSES_PATH}`)
  }

}

export const STUDENTS_CRUD = {
  title: 'Students', 
  service: StudentsService
}
  
export const COURSES_CRUD = {
  title: 'Courses', 
  service: CoursesService
}
