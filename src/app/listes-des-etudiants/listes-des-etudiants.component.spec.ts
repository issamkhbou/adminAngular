import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesDesEtudiantsComponent } from './listes-des-etudiants.component';

describe('ListesDesEtudiantsComponent', () => {
  let component: ListesDesEtudiantsComponent;
  let fixture: ComponentFixture<ListesDesEtudiantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesDesEtudiantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesDesEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
