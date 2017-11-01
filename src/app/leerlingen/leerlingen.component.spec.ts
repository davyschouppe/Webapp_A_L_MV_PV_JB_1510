import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenComponent } from './leerlingen.component';

describe('LeerlingenComponent', () => {
  let component: LeerlingenComponent;
  let fixture: ComponentFixture<LeerlingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
