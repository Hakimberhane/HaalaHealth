import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatientprofileComponent } from './admpatientprofile.component';

describe('AdmpatientprofileComponent', () => {
  let component: AdmpatientprofileComponent;
  let fixture: ComponentFixture<AdmpatientprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatientprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatientprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
