import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { 
    path: 'courses',
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) 
  },
  { 
    path: 'students',
    loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
