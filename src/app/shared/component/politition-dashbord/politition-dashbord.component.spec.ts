import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolititionDashbordComponent } from './politition-dashbord.component';

describe('PolititionDashbordComponent', () => {
  let component: PolititionDashbordComponent;
  let fixture: ComponentFixture<PolititionDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolititionDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolititionDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
