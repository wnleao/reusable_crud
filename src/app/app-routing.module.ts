import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { COURSES_CRUD, STUDENTS_CRUD } from './cruds.service';

const importCrudModule = () => import('./crud/crud.module').then(m => m.CrudModule);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: COURSES_CRUD.route_path },
  { 
    path: COURSES_CRUD.route_path,
    loadChildren: importCrudModule
  },
  { 
    path: STUDENTS_CRUD.route_path,
    loadChildren: importCrudModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
