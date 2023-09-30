import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPage } from './agenda.page';

describe('AgendaPage', () => {
  let component: AgendaPage;
  let fixture: ComponentFixture<AgendaPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(AgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});