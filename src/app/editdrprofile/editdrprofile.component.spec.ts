import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdrprofileComponent } from './editdrprofile.component';

describe('EditdrprofileComponent', () => {
  let component: EditdrprofileComponent;
  let fixture: ComponentFixture<EditdrprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdrprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdrprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
