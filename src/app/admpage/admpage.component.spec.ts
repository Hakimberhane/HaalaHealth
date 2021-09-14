import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpageComponent } from './admpage.component';

describe('AdmpageComponent', () => {
  let component: AdmpageComponent;
  let fixture: ComponentFixture<AdmpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
