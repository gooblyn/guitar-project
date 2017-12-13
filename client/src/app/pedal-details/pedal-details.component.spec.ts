import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedalDetailsComponent } from './pedal-details.component';

describe('PedalDetailsComponent', () => {
  let component: PedalDetailsComponent;
  let fixture: ComponentFixture<PedalDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedalDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
