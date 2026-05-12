import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketDashbordComponent } from './cricket-dashbord.component';

describe('CricketDashbordComponent', () => {
  let component: CricketDashbordComponent;
  let fixture: ComponentFixture<CricketDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
