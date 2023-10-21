import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LowcarbPage } from './lowcarb.page';

describe('LowcarbPage', () => {
  let component: LowcarbPage;
  let fixture: ComponentFixture<LowcarbPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LowcarbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
