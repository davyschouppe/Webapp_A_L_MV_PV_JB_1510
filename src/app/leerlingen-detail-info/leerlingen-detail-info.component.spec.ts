import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenInfoDetailComponent } from './leerlingen-detail-info.component';

describe('LeerlingenInfoDetailComponent', () => {
  let component: LeerlingenInfoDetailComponent;
  let fixture: ComponentFixture<LeerlingenInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
