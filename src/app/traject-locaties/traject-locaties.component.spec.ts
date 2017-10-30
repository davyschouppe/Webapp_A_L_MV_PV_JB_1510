import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectLocatiesComponent } from './traject-locaties.component';

describe('TrajectLocatiesComponent', () => {
  let component: TrajectLocatiesComponent;
  let fixture: ComponentFixture<TrajectLocatiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectLocatiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectLocatiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
