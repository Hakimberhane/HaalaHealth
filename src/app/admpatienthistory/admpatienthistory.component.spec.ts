import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmpatienthistoryComponent } from './admpatienthistory.component';

describe('AdmpatienthistoryComponent', () => {
  let component: AdmpatienthistoryComponent;
  let fixture: ComponentFixture<AdmpatienthistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmpatienthistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmpatienthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
