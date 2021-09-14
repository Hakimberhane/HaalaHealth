import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidereditpageComponent } from './providereditpage.component';

describe('ProvidereditpageComponent', () => {
  let component: ProvidereditpageComponent;
  let fixture: ComponentFixture<ProvidereditpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidereditpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidereditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
