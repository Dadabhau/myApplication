import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switchmap2Component } from './switchmap2.component';

describe('Switchmap2Component', () => {
  let component: Switchmap2Component;
  let fixture: ComponentFixture<Switchmap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Switchmap2Component]
    });
    fixture = TestBed.createComponent(Switchmap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
