import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedalListComponent } from './pedal-list.component';

describe('PedalListComponent', () => {
  let component: PedalListComponent;
  let fixture: ComponentFixture<PedalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
