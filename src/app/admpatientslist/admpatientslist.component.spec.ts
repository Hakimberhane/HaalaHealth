import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatientslistComponent } from './admpatientslist.component';

describe('AdmpatientslistComponent', () => {
  let component: AdmpatientslistComponent;
  let fixture: ComponentFixture<AdmpatientslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatientslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatientslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
