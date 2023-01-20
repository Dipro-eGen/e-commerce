import {Component} from '@angular/core';
import {ReactiveFormConfig} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'app-ehr',
  template: `<router-outlet></router-outlet>`,
})
export class EhrComponent {

  constructor() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This field is required.',
        minLenght: 'Enter minimum length of {{0}} characters.',
        compare: 'The value should be matched with {{0}}.',
        alpha: 'You can only enter alphabets.'
      }
    });
  }

}
