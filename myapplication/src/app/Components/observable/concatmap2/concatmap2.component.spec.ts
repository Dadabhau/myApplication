import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concatmap2Component } from './concatmap2.component';

describe('Concatmap2Component', () => {
  let component: Concatmap2Component;
  let fixture: ComponentFixture<Concatmap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Concatmap2Component]
    });
    fixture = TestBed.createComponent(Concatmap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
