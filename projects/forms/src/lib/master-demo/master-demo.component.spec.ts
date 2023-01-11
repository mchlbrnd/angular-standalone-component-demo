import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppService } from '../../../../main/src/app/app.service';

import { MasterDemoComponent } from './master-demo.component';

describe('MasterDemoComponent', () => {
  let component: MasterDemoComponent;
  let fixture: ComponentFixture<MasterDemoComponent>;
  let mockAppService = jasmine.createSpyObj('AppService', [], ['prop']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterDemoComponent ],
      providers: [{
        provide: AppService,
        useValue: mockAppService,
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(MasterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
