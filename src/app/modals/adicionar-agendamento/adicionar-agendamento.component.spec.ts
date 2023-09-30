import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarAgendamentoComponent } from './adicionar-agendamento.component';

describe('AdicionarAgendamentoComponent', () => {
  let component: AdicionarAgendamentoComponent;
  let fixture: ComponentFixture<AdicionarAgendamentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarAgendamentoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
