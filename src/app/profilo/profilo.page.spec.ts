import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProfiloPage } from './profilo.page';

describe('ProfiloPage', () => {
  let component: ProfiloPage;
  let fixture: ComponentFixture<ProfiloPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfiloPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
