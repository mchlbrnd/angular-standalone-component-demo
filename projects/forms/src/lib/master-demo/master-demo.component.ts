import { Component, Self, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppService } from '../../../../main/src/app/app.service';

@Component({
  selector: 'forms-master-demo',
  standalone: true,
  providers: [AppService],
  imports: [CommonModule, FormsModule],
  templateUrl: './master-demo.component.html',
  styleUrls: ['./master-demo.component.css']
})
export class MasterDemoComponent {
  // use own instance of AppService
  // constructor(@Self() public readonly appService: AppService) {
  // }

  // use root instance of AppService
  constructor(@SkipSelf() public readonly appService: AppService) { // use
  }
}
