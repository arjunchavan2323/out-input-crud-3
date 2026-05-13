import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolititionFormComponent } from './politition-form.component';

describe('PolititionFormComponent', () => {
  let component: PolititionFormComponent;
  let fixture: ComponentFixture<PolititionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolititionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolititionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
