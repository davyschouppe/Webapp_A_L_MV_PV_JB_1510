import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeerlingenDetailComponent } from './leerlingen-detail.component';

describe('LeerlingenDetailComponent', () => {
  let component: LeerlingenDetailComponent;
  let fixture: ComponentFixture<LeerlingenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeerlingenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeerlingenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
