import { Component, OnInit } from '@angular/core';
import {Member} from '../../models/member.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Etudiant} from '../../models/etudiant.model';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.scss']
})
export class EtudiantFormComponent implements OnInit {
  currentItemId: string;
  item: Etudiant;
  form: FormGroup;
  etudiant: Etudiant[];
  itemetudiant: Etudiant ;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
      this.getEtudiantsByid(this.currentItemId);
    } else {
      this.initForm(null);
    }
  }
  // @ts-ignore
  getEtudiantsByid(id: string): void {
    this.memberService.getAllEtudiantsMembers().then(etudiant => {
      this.etudiant = etudiant;
      console.log(this.currentItemId);
      etudiant.forEach(elt => {
          // tslint:disable-next-line:no-conditional-assignment
        if (id.localeCompare(elt.id) === 0){
          this.itemetudiant = elt ;
          this.initForm(elt);
        }
      }
      );

    });
  }
  initForm(item: Etudiant): void {
    this.form = new FormGroup({
      cin: new FormControl(item?.cin, [Validators.required]),
      nom: new FormControl(item?.nom, [Validators.required]),
      prenom: new FormControl(item?.prenom, [Validators.required]),
      password: new FormControl(item?.password, [Validators.required]),
      dateNaissance: new FormControl(item?.dateNaissance, [Validators.required]),
      cv: new FormControl(item?.cv ),
      email: new FormControl(item?.email, [Validators.required]),
      sujet: new FormControl(item?.sujet, [Validators.required]),
      diplome: new FormControl(item?.diplome, [Validators.required]),
     // encadrant: new FormControl(item?.encadrant[`nom`], ),
    });
  }
  isFormInEditMode(): boolean {
    return !!this.currentItemId;
  }
  onSubmit(): void {
    const objectToSubmit = {...this.itemetudiant, ...this.form.value};
    console.log(objectToSubmit);
    if (this.isFormInEditMode()) {
      this.memberService.updateEtudiant(this.currentItemId, objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    } else {
      this.memberService.createEtudiant(objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    }
  }
}
