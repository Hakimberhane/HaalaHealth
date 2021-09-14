import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmproviderlistComponent } from './admproviderlist.component';

describe('AdmproviderlistComponent', () => {
  let component: AdmproviderlistComponent;
  let fixture: ComponentFixture<AdmproviderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmproviderlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmproviderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
