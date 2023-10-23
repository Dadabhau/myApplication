import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpratorsComponent } from './oprators.component';

describe('OpratorsComponent', () => {
  let component: OpratorsComponent;
  let fixture: ComponentFixture<OpratorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpratorsComponent]
    });
    fixture = TestBed.createComponent(OpratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
