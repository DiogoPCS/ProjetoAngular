import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemlactosePage } from './semlactose.page';

describe('SemlactosePage', () => {
  let component: SemlactosePage;
  let fixture: ComponentFixture<SemlactosePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SemlactosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
