import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginasadminComponent } from './loginasadmin.component';

describe('LoginasadminComponent', () => {
  let component: LoginasadminComponent;
  let fixture: ComponentFixture<LoginasadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginasadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
