import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDemoComponent } from './master-demo.component';

describe('MasterDemoComponent', () => {
  let component: MasterDemoComponent;
  let fixture: ComponentFixture<MasterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
