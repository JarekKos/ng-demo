import {AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

import { StepDirective } from '../step.directive';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { CompanyDataComponent } from './components/company-data/company-data.component';
import { UserService } from './services/UserService';
import { SummaryComponent } from './components/summary/summary.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [UserService]
})
export class ReactiveFormComponent implements OnInit, AfterViewInit {

  steps: Array<{step, label, component}> = [
    {step: 1, label: 'Step 1', component: PersonalDataComponent},
    {step: 2, label: 'Step 2', component: CompanyDataComponent},
    {step: 3, label: 'Summary', component: SummaryComponent}
  ];
  activeTab: {step, label, component};
  stepsContainer: ViewContainerRef = null;
  cmp: Component = null;

  // get element of StepDirective
  @ViewChild(StepDirective) stepHost: StepDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private userService: UserService
  ) { }

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

  setActive(index: number) {
    if (this.cmp && this.cmp['form'] && this.cmp['form'].valid) {
      this.userService.updateUser(this.cmp['form'].value);
    }

    if (this.cmp === null || this.activeTab.step > this.steps[index].step || this.cmp['form'].valid) {
      this.stepsContainer.clear();

      this.activeTab = this.steps[index];
      const displayedStep = this.componentFactoryResolver.resolveComponentFactory(this.activeTab.component);

      const ref = this.stepsContainer.createComponent(displayedStep);
      this.cmp = ref.instance;

      if (this.cmp['onClickButton']) {
        this.cmp['onClickButton'].subscribe(slideNumber => this.setActive(slideNumber));
      }
    }
  }
}
