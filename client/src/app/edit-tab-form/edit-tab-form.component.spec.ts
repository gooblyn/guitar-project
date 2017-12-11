import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTabFormComponent } from './edit-tab-form.component';

describe('EditTabFormComponent', () => {
  let component: EditTabFormComponent;
  let fixture: ComponentFixture<EditTabFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTabFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTabFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
