import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorregisterpageComponent } from './doctorregisterpage.component';

describe('DoctorregisterpageComponent', () => {
  let component: DoctorregisterpageComponent;
  let fixture: ComponentFixture<DoctorregisterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorregisterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorregisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
