import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolititionCardComponent } from './politition-card.component';

describe('PolititionCardComponent', () => {
  let component: PolititionCardComponent;
  let fixture: ComponentFixture<PolititionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolititionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolititionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
