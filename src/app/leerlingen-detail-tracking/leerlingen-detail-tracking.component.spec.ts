import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenDetailTrackingComponent } from './leerlingen-detail-tracking.component';

describe('LeerlingenDetailTrackingComponent', () => {
  let component: LeerlingenDetailTrackingComponent;
  let fixture: ComponentFixture<LeerlingenDetailTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenDetailTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenDetailTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
