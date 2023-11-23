import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitatortaPage } from './receitatorta.page';

describe('ReceitatortaPage', () => {
  let component: ReceitatortaPage;
  let fixture: ComponentFixture<ReceitatortaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitatortaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
