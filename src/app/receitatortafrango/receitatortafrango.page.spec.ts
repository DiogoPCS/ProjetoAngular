import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitatortafrangoPage } from './receitatortafrango.page';

describe('ReceitatortafrangoPage', () => {
  let component: ReceitatortafrangoPage;
  let fixture: ComponentFixture<ReceitatortafrangoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitatortafrangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
