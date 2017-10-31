import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfsprakenComponent } from './afspraken.component';

describe('AfsprakenComponent', () => {
  let component: AfsprakenComponent;
  let fixture: ComponentFixture<AfsprakenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfsprakenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfsprakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
