import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';

import { phoneValidator } from '../../../customValidators/phoneValidator';
import { StepInterface } from '../../interfaces/StepInterface';
import { UserService } from '../../services/UserService';
import {CompanyDataModel} from "../../models/company-data-model";

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit, StepInterface {

  form: FormGroup;
  @Output() onClickButton = new EventEmitter<number>();

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.createForm();
    this.setPhoneNumbers(['']);
  }

  private createForm() {
    this.form = this.fb.group({
      companyName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      companyEmail: new FormControl('', [Validators.required, Validators.email]),
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

  onNext() {}

  resetForm() {
    this.form.reset();
  }

  isValidPhoneNumber(index) {
    return this.phoneNumbers.controls[index].touched
      && this.phoneNumbers.controls[index].invalid;
  }

  get companyName(): AbstractControl {
    return this.form.get('companyName');
  }

  get companyEmail(): AbstractControl {
    return this.form.get('companyEmail');
  }

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

}
