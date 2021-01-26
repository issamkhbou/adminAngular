import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubsFormComponent } from './pubs-form.component';

describe('PubsFormComponent', () => {
  let component: PubsFormComponent;
  let fixture: ComponentFixture<PubsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
