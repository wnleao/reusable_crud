export enum FormElementTag {
    INPUT, SELECT, TEXTAREA
}

export class FormElement {
    tag: FormElementTag;
    key: string;
    value: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
  
    constructor(
        tag: FormElementTag,
        attributes: {
        value?: string,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        options?: {key: string, value: string}[];
      } = {}) {
      this.tag = tag;
      this.value = attributes.value;
      this.key = attributes.key || '';
      this.label = attributes.label || '';
      this.required = !!attributes.required;
      this.order = attributes.order === undefined ? 1 : attributes.order;
      this.controlType = attributes.controlType || '';
      this.type = attributes.type || '';
      this.options = attributes.options;
    }
  }