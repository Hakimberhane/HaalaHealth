import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatienteditComponent } from './admpatientedit.component';

describe('AdmpatienteditComponent', () => {
  let component: AdmpatienteditComponent;
  let fixture: ComponentFixture<AdmpatienteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatienteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatienteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
