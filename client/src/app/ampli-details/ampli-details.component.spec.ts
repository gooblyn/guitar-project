import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliDetailsComponent } from './ampli-details.component';

describe('AmpliDetailsComponent', () => {
  let component: AmpliDetailsComponent;
  let fixture: ComponentFixture<AmpliDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpliDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpliDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
