import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PacotePage } from './pacote.page';

describe('PacotePage', () => {
  let component: PacotePage;
  let fixture: ComponentFixture<PacotePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PacotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
