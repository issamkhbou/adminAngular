import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../models/etudiant.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {EnseignantChercheur} from '../../models/enseignantChercheur.model';

@Component({
  selector: 'app-enseignant-form',
  templateUrl: './enseignant-form.component.html',
  styleUrls: ['./enseignant-form.component.scss']
})
export class EnseignantFormComponent implements OnInit {
  currentItemId: string;
  item: Etudiant;
  form: FormGroup;
  enseniant: EnseignantChercheur[];
  itemenseniant: EnseignantChercheur ;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
      this.getEnseignantByid(this.currentItemId);
    } else {
      this.initForm(null);
    }
  }
  // @ts-ignore
  getEnseignantByid(id: string): void {
    this.memberService.getAllEnseniantMembers().then(enseniant => {
      this.enseniant = enseniant;
      console.log(this.currentItemId);
      enseniant.forEach(elt => {
          // tslint:disable-next-line:no-conditional-assignment
          if (id.localeCompare(elt.id) === 0){
            this.itemenseniant = elt ;
            this.initForm(elt);
          }
        }
      );

    });
  }
  initForm(item: EnseignantChercheur): void {
    this.form = new FormGroup({
      cin: new FormControl(item?.cin, [Validators.required]),
      nom: new FormControl(item?.nom, [Validators.required]),
      prenom: new FormControl(item?.prenom, [Validators.required]),
      password: new FormControl(item?.password, [Validators.required]),
      dateNaissance: new FormControl(item?.dateNaissance, [Validators.required]),
      cv: new FormControl(item?.cv ),
      email: new FormControl(item?.email, [Validators.required]),
      etablissement: new FormControl(item?.etablissement, [Validators.required]),
      grade: new FormControl(item?.grade, [Validators.required]),
    });
  }
  isFormInEditMode(): boolean {
    return !!this.currentItemId;
  }
  onSubmit(): void {
    const objectToSubmit = {...this.itemenseniant, ...this.form.value};
    console.log(objectToSubmit);
    if (this.isFormInEditMode()) {
      this.memberService.updateEnseigant(this.currentItemId, objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    } else {
      this.memberService.createEnseigant(objectToSubmit).then(() => {
        this.router.navigate(['./members']);
      });
    }
  }

}
