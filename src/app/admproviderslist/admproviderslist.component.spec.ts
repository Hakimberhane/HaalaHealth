import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmproviderslistComponent } from './admproviderslist.component';

describe('AdmproviderslistComponent', () => {
  let component: AdmproviderslistComponent;
  let fixture: ComponentFixture<AdmproviderslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmproviderslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmproviderslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
