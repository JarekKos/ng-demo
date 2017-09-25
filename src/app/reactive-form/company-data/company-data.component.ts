import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { StepInterface } from '../interfaces/StepInterface';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.css']
})
export class CompanyDataComponent implements OnInit, StepInterface {

  form: FormGroup;
  @Output() onClickButton = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
