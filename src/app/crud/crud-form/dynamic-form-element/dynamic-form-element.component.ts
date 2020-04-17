import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { FormElement, FormElementTag } from './form-element';

@Component({
  selector: 'app-dynamic-form-element',
  templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent {
  @Input() formElement: FormElement;
  @Input() form: FormGroup;
  // https://stackoverflow.com/questions/35835984/how-to-use-a-typescript-enum-value-in-an-angular2-ngswitch-statement
  formElementTag = FormElementTag;
  get isValid() { return this.form.controls[this.formElement.key].valid; }
}
