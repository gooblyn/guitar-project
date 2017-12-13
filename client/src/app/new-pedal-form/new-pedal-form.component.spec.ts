import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPedalFormComponent } from './new-pedal-form.component';

describe('NewPedalFormComponent', () => {
  let component: NewPedalFormComponent;
  let fixture: ComponentFixture<NewPedalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPedalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPedalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
