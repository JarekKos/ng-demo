import {AbstractControl, ValidatorFn} from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const format = /[0-9]{3}-[0-9]{3}-[0-9]{3}$/;
    const forbidden = format.test(control.value);
    return !forbidden ? {'wrongFormat': {value: control.value}} : null;
  };
}
