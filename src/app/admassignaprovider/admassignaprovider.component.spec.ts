import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmassignaproviderComponent } from './admassignaprovider.component';

describe('AdmassignaproviderComponent', () => {
  let component: AdmassignaproviderComponent;
  let fixture: ComponentFixture<AdmassignaproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmassignaproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmassignaproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
