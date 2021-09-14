import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatientregistrationComponent } from './admpatientregistration.component';

describe('AdmpatientregistrationComponent', () => {
  let component: AdmpatientregistrationComponent;
  let fixture: ComponentFixture<AdmpatientregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatientregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatientregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
