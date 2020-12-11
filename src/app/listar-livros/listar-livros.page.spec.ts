import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarLivrosPage } from './listar-livros.page';

describe('ListarLivrosPage', () => {
  let component: ListarLivrosPage;
  let fixture: ComponentFixture<ListarLivrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarLivrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarLivrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
