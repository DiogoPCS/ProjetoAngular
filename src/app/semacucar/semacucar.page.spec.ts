import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemacucarPage } from './semacucar.page';

describe('SemacucarPage', () => {
  let component: SemacucarPage;
  let fixture: ComponentFixture<SemacucarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SemacucarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
