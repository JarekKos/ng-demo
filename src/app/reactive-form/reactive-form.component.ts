import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import { StepDirective } from '../step.directive';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { CompanyDataComponent } from './company-data/company-data.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {

  steps: Array<{label, component}> = [
    {label: 'Step 1', component: PersonalDataComponent},
    {label: 'Step 2', component: CompanyDataComponent}
  ];
  activeTab: {label, component};
  stepsContainer: ViewContainerRef = null;

  // get element of StepDirective
  @ViewChild(StepDirective) stepHost: StepDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.activeTab = this.steps[0];
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.stepsContainer = this.stepHost.container;
      this.setActive(0);
    });
  }

  isActive(index) {
    return this.activeTab === this.steps[index];
  }

  setActive(index) {
    this.stepsContainer.clear();

    this.activeTab = this.steps[index];
    const displayedStep = this.componentFactoryResolver.resolveComponentFactory(this.activeTab.component);

    this.stepsContainer.createComponent(displayedStep);
  }

  get activeComponent() {
    return 'kkk';
  }

}
