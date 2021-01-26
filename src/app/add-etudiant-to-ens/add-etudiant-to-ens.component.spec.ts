import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtudiantToEnsComponent } from './add-etudiant-to-ens.component';

describe('AddEtudiantToEnsComponent', () => {
  let component: AddEtudiantToEnsComponent;
  let fixture: ComponentFixture<AddEtudiantToEnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtudiantToEnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtudiantToEnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
