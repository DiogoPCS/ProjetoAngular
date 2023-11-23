import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitabolosemacucarPage } from './receitabolosemacucar.page';

describe('ReceitabolosemacucarPage', () => {
  let component: ReceitabolosemacucarPage;
  let fixture: ComponentFixture<ReceitabolosemacucarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitabolosemacucarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
