import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToarrayComponent } from './toarray.component';

describe('ToarrayComponent', () => {
  let component: ToarrayComponent;
  let fixture: ComponentFixture<ToarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToarrayComponent]
    });
    fixture = TestBed.createComponent(ToarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
