import { Component, Self, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassicModule } from 'classic';
import { AppService } from '../../../../main/src/app/app.service';
import { MasterStepOneComponent } from '../master-step-one/master-step-one.component';

@Component({
  selector: 'forms-master-demo',
  standalone: true,
  providers: [AppService],
  imports: [
    CommonModule,
    FormsModule,
    MasterStepOneComponent, // standalone component
    ClassicModule, // classic module to use classic-root
  ],
  templateUrl: './master-demo.component.html',
  styleUrls: ['./master-demo.component.css']
})
export class MasterDemoComponent {
  // use own instance of AppService
  // constructor(@Self() public readonly ownAppService: AppService) {
  // }

  // use root instance of AppService
  // constructor(@SkipSelf() public readonly inheritedAppService: AppService) {
  // }

  // use root instance of AppService and own instance of AppService
  constructor(@SkipSelf() public readonly inheritedAppService: AppService, @Self() public readonly ownAppService: AppService) { // use
  }
}
