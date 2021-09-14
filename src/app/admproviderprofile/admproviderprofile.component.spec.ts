import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmproviderprofileComponent } from './admproviderprofile.component';

describe('AdmproviderprofileComponent', () => {
  let component: AdmproviderprofileComponent;
  let fixture: ComponentFixture<AdmproviderprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmproviderprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmproviderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
