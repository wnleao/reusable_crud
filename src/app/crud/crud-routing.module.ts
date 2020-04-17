import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { ItemResolverGuard } from './item-resolver.guard';
import { CrudCompiledFormComponent } from './crud-compiled-form/crud-compiled-form.component';

const routes: Routes = [
  { path: '', component: CrudListComponent },
  {
    path: 'new',
    component: CrudFormComponent,
    resolve: { item: ItemResolverGuard },
  },
  {
    path: 'edit/:id',
    component: CrudFormComponent,
    resolve: { item: ItemResolverGuard },
  },
  {
    path: 'editc/:id',
    component: CrudCompiledFormComponent,
    resolve: { item: ItemResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
