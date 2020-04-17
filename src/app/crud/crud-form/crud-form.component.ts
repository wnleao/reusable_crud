import { Component, OnInit, Injector, Compiler } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormElement, FormElementTag } from './dynamic-form-element/form-element';

// https://angular.io/guide/dynamic-form
@Component({
  selector: 'app-crud-form',
  templateUrl: './crud-form.component.html',
  styleUrls: ['./crud-form.component.css'],
})
export class CrudFormComponent implements OnInit {
  form: FormGroup;
  serviceName;
  crudConfig;
  service;
  formContent;

  formElements;
  payLoad = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private injector: Injector,
    protected compiler: Compiler
  ) {
    this.serviceName = route.snapshot.parent.url[0].path;
    this.crudConfig = injector.get(this.serviceName);
    this.service = injector.get(this.crudConfig.service);
  }

  ngOnInit(): void {
    let group: any = {};

    const item = this.route.snapshot.data.item;
    this.formElements = this.crudConfig.formElements.sort((a, b) => a.order - b.order);

    console.log(this.formElements);

    group['id'] = item ? item['id'] : null;

    this.formElements.forEach((element) => {
      element['value'] = item ? item[element.key] : null;
      group[element.key] = element.required
        ? new FormControl(element.value || '', Validators.required)
        : new FormControl(element.value || '');
    });

    this.form = this.fb.group(group);
  }

  onSubmit() {
    console.log('on submit...');
  }

  onCancel() {
    console.log('on cancel...');
  }

}
