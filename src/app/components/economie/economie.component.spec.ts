import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomieComponent } from './economie.component';

describe('EconomieComponent', () => {
  let component: EconomieComponent;
  let fixture: ComponentFixture<EconomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
