import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestePage } from './teste.page';

describe('TestePage', () => {
  let component: TestePage;
  let fixture: ComponentFixture<TestePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
