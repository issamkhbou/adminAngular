import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerEncadrantsComponent } from './changer-encadrants.component';

describe('ChangerEncadrantsComponent', () => {
  let component: ChangerEncadrantsComponent;
  let fixture: ComponentFixture<ChangerEncadrantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerEncadrantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerEncadrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
