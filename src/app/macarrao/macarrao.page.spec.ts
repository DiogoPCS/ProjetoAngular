import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MacarraoPage } from './macarrao.page';

describe('MacarraoPage', () => {
  let component: MacarraoPage;
  let fixture: ComponentFixture<MacarraoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MacarraoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
