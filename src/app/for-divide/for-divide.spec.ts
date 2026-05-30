import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDivide } from './for-divide';

describe('ForDivide', () => {
  let component: ForDivide;
  let fixture: ComponentFixture<ForDivide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDivide],
    }).compileComponents();

    fixture = TestBed.createComponent(ForDivide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
