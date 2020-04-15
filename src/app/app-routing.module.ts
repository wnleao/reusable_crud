import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE_PATHS } from './cruds.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ROUTE_PATHS[0] }
];

const importCrudModule = () => import('./crud/crud.module').then(m => m.CrudModule);
ROUTE_PATHS.forEach(crud_path => routes.push({ path: crud_path, loadChildren: importCrudModule }));

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
