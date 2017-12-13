import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAmpliFormComponent } from './new-ampli-form.component';

describe('NewAmpliFormComponent', () => {
  let component: NewAmpliFormComponent;
  let fixture: ComponentFixture<NewAmpliFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAmpliFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAmpliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
