import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterStepOneComponent } from './master-step-one.component';

describe('MasterStepOneComponent', () => {
  let component: MasterStepOneComponent;
  let fixture: ComponentFixture<MasterStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterStepOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
