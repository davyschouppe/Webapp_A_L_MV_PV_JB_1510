import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectAfsprakenComponent } from './traject-afspraken.component';

describe('TrajectAfsprakenComponent', () => {
  let component: TrajectAfsprakenComponent;
  let fixture: ComponentFixture<TrajectAfsprakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectAfsprakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectAfsprakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
