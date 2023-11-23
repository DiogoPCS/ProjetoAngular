import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitabolochocoPage } from './receitabolochoco.page';

describe('ReceitabolochocoPage', () => {
  let component: ReceitabolochocoPage;
  let fixture: ComponentFixture<ReceitabolochocoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitabolochocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
