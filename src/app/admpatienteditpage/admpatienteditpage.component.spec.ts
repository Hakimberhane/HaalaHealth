import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatienteditpageComponent } from './admpatienteditpage.component';

describe('AdmpatienteditpageComponent', () => {
  let component: AdmpatienteditpageComponent;
  let fixture: ComponentFixture<AdmpatienteditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatienteditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatienteditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
