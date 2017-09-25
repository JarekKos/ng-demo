import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  form: FormGroup;

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

  onSubmit() {
    console.log(this.form.value);
    console.log(this.form.valid);
  }

  setPhoneNumbers(phoneNumbers: String[] = []) {
    const phoneNumbersFCs = phoneNumbers.map(phoneNumber => this.fb.control(phoneNumber, [Validators.required]));
    const phoneNumberFormArray = this.fb.array(phoneNumbersFCs);

    this.form.setControl('phoneNumbers', phoneNumberFormArray);
  }

  get phoneNumbers(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  get name() {
    return this.form.get('name');
  }

  addPhoneNumber() {
    this.phoneNumbers.push(this.fb.control(''));
  }

  removePhoneNumber() {
    this.phoneNumbers.removeAt(this.phoneNumbers.length - 1);
  }

}
