import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGuitarFormComponent } from './new-guitar-form.component';

describe('NewGuitarFormComponent', () => {
  let component: NewGuitarFormComponent;
  let fixture: ComponentFixture<NewGuitarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGuitarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGuitarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
