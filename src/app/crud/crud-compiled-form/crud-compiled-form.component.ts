import { Component, OnInit, Injector, NgModule, Compiler, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-compiled-form',
  templateUrl: './crud-compiled-form.component.html',
  styleUrls: ['./crud-compiled-form.component.css']
})

export class CrudCompiledFormComponent implements OnInit {

  @ViewChild('contentPlaceHolder', {read: ViewContainerRef}) placeHolder: ViewContainerRef;

  form: FormGroup;
  serviceName;
  crudConfig;
  service;
  formContent;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private injector: Injector,
    protected compiler: Compiler,
  ) { 
    this.serviceName = route.snapshot.parent.url[0].path;
    this.crudConfig = injector.get(this.serviceName); 
    this.service = injector.get(this.crudConfig.service);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {


    const item = this.route.snapshot.data.item;

    let group = {};
    if (item) {
      console.log(item);
      console.log(Object.keys(item));
      for (let key of Object.keys(item)) {
        console.log(key);
        group[key] = item[key];
      }  
    } else {
      group = {
        id: [null],
        name: [null],
      };
    }
  
    let rawFormContent = `
    <form class="needs-validation" novalidate [formGroup]="form">
    <div>
      <div class="form-row">
        <div class="col-sm-12">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
            formControlName="name"
            value=""
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary" (click)="onSubmit()">Salvar</button>
      <button type="button" class="btn btn-default" (click)="onCancel()">Cancelar</button>
    </div>
  </form>
    `
    let Outer = this;

    const tmpCmp = Component({template: rawFormContent})(class {
     
      form: FormGroup;

      constructor() { }

      ngOnInit() {
        console.log(group);
        this.form = Outer.fb.group(group);
      }

      onSubmit() {
        Outer.onSubmit();
      }

      onCancel() {
        Outer.onCancel();
      }
      
    });
    
    @NgModule({
      declarations: [tmpCmp],
      entryComponents: [tmpCmp],
      imports: [CommonModule, ReactiveFormsModule],
    })
    class AdHocModule {}

    this.compiler.compileModuleAndAllComponentsAsync(AdHocModule).then(
      factories => {
        const m = factories.ngModuleFactory.create(this.injector);
        const f = factories.componentFactories[0];
        console.log(factories.componentFactories.length)
        console.log(f);
        const cmp = f.create(this.injector, [], null, m);
        console.log(cmp);
        this.placeHolder.insert(cmp.hostView);
      });
  }

  onSubmit() {
    console.log("on submit...");
  }

  onCancel() {
    console.log("on cancel...");
  }

}
