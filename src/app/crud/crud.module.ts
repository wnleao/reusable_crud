import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudListComponent } from './crud-list/crud-list.component';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudCompiledFormComponent } from './crud-compiled-form/crud-compiled-form.component';
import { DynamicFormElementComponent } from './crud-form/dynamic-form-element/dynamic-form-element.component';

@NgModule({
  declarations: [
    CrudListComponent,
    CrudFormComponent,
    CrudCompiledFormComponent,
    DynamicFormElementComponent,
  ],
  imports: [CommonModule, CrudRoutingModule, ReactiveFormsModule],
})
export class CrudModule {}
