import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';



import { CelebritiesPage } from './celebrities.page';

describe('CelebritiesPage', () => {
  let component: CelebritiesPage;
  let fixture: ComponentFixture<CelebritiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CelebritiesPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CelebritiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
