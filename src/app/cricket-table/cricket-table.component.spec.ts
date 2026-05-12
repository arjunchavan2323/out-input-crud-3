import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketTableComponent } from './cricket-table.component';

describe('CricketTableComponent', () => {
  let component: CricketTableComponent;
  let fixture: ComponentFixture<CricketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
