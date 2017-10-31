import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectLocatiesDetailComponent } from './traject-locaties-detail.component';

describe('TrajectLocatiesDetailComponent', () => {
  let component: TrajectLocatiesDetailComponent;
  let fixture: ComponentFixture<TrajectLocatiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectLocatiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectLocatiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
