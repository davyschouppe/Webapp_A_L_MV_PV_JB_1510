import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectOdsComponent } from './traject-ods.component';

describe('TrajectOdsComponent', () => {
  let component: TrajectOdsComponent;
  let fixture: ComponentFixture<TrajectOdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectOdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectOdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
