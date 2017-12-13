import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliListComponent } from './ampli-list.component';

describe('AmpliListComponent', () => {
  let component: AmpliListComponent;
  let fixture: ComponentFixture<AmpliListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmpliListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmpliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
