import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudListComponent } from './crud-list/crud-list.component'
 
const routes: Routes = [
  { path: '', component: CrudListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
