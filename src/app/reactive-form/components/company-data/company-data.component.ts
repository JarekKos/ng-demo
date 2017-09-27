import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators, FormArray, AbstractControl} from '@angular/forms';

import { phoneValidator } from '../../../customValidators/phoneValidator';
import { StepInterface } from '../../interfaces/StepInterface';
import { UserService } from '../../services/UserService';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit, StepInterface {

  form: FormGroup;
  @Output() onClickButton = new EventEmitter<number>();
  user: UserModel;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.createForm();
    this.setPhoneNumbers(this.user.companyPhoneNumbers);
  }

  private createForm() {
    this.form = this.fb.group({
      companyName: new FormControl(this.user.companyName, [Validators.required, Validators.minLength(3)]),
      companyEmail: new FormControl(this.user.companyEmail, [Validators.required, Validators.email]),
      companyPhoneNumbers: this.fb.array([])
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

    this.form.setControl('companyPhoneNumbers', phoneNumberFormArray);
  }

  addPhoneNumber() {
    this.companyPhoneNumbers.push(
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
    this.companyPhoneNumbers.removeAt(this.companyPhoneNumbers.length - 1);
  }

  onNext() {
    this.userService.updateUser({
      companyName: this.companyName.value,
      companyEmail: this.companyEmail.value,
      companyPhoneNumber: this.companyPhoneNumbers.value,
    });

    this.onClickButton.next(2);
  }

  resetForm() {
    this.form.reset();
  }

  isValidPhoneNumber(index) {
    return this.companyPhoneNumbers.controls[index].touched
      && this.companyPhoneNumbers.controls[index].invalid;
  }

  get companyName(): AbstractControl {
    return this.form.get('companyName');
  }

  get companyEmail(): AbstractControl {
    return this.form.get('companyEmail');
  }

  get companyPhoneNumbers(): FormArray {
    return this.form.get('companyPhoneNumbers') as FormArray;
  }

}
