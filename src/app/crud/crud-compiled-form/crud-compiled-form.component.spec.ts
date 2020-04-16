import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCompiledFormComponent } from './crud-compiled-form.component';

describe('CrudCompiledFormComponent', () => {
  let component: CrudCompiledFormComponent;
  let fixture: ComponentFixture<CrudCompiledFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCompiledFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCompiledFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
