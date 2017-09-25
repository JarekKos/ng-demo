import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';

import { phoneValidator } from '../../customValidators/phoneValidator';
import { StepInterface } from '../interfaces/StepInterface';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit, StepInterface {

  form: FormGroup;
  @Output() onClickButton = new EventEmitter<number>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.setPhoneNumbers(['']);
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumbers: this.fb.array([])
    });
  }

  setPhoneNumbers(phoneNumbers: String[] = []) {
    const phoneNumbersFCs = phoneNumbers.map(phoneNumber =>
      this.fb.control(
        phoneNumber,
        [
          Validators.required,
          phoneValidator()
        ]
      )
    );
    const phoneNumberFormArray = this.fb.array(phoneNumbersFCs);

    this.form.setControl('phoneNumbers', phoneNumberFormArray);
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.fb.control(
        '',
        [
          Validators.required,
          phoneValidator(),
        ]
      )
    );
  }

  removePhoneNumber() {
    this.phoneNumbers.removeAt(this.phoneNumbers.length - 1);
  }

  onNext() {
    this.onClickButton.next(1);
  }

  resetForm() {
    this.form.reset();
  }

  isValidPhoneNumber(index) {
    return this.phoneNumbers.controls[index].touched
      && this.phoneNumbers.controls[index].invalid;
  }

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  get name() {
    return this.form.get('name');
  }

  get surname() {
    return this.form.get('surname');
  }

}
