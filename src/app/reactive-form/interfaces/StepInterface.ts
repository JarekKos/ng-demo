import {EventEmitter} from "@angular/core";

export interface StepInterface {
  onClickButton: EventEmitter<number>;
}
