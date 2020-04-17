import { Injectable } from '@angular/core'
import { CrudService } from './shared/crud-service'
import { HttpClient } from '@angular/common/http'
import { Course } from './courses/course'
import { Student } from './students/student'
import { environment } from 'src/environments/environment'
import { FormElement, FormElementTag } from './crud/crud-form/dynamic-form-element/form-element'

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

const STUDENT_FORM_ELEMENTS: FormElement[] = [
  new FormElement(FormElementTag.INPUT, {
    type: 'text',
    key: 'name',
    label: 'Given name',
    required: true,
  }),

  new FormElement(FormElementTag.SELECT, {
    key: 'sex',
    label: 'Sex',
    options: [
      { key: 'M', value: 'Male' },
      { key: 'F', value: 'Female' },
    ],
  }),
];

const COURSE_FORM_ELEMENTS: FormElement[] = [
  new FormElement(FormElementTag.INPUT, {
    type: 'number',
    key: 'classes',
    label: 'Classes',
    required: true,
    order: 2,
  }),

  new FormElement(FormElementTag.INPUT, {
    type: 'text',
    key: 'name',
    label: 'Name',
    required: true,
    order: 1,
  }),
];


export const STUDENTS_CRUD = {
  title: 'Students', 
  service: StudentsService,
  formElements: STUDENT_FORM_ELEMENTS
}
  
export const COURSES_CRUD = {
  title: 'Courses', 
  service: CoursesService,
  formElements: COURSE_FORM_ELEMENTS
}


