import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../models/etudiant.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Outil} from '../../models/outil.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Publication} from '../../models/publication.model';

@Component({
  selector: 'app-pubs-form',
  templateUrl: './pubs-form.component.html',
  styleUrls: ['./pubs-form.component.scss']
})
export class PubsFormComponent implements OnInit {
  currentpubId: string;
  item: Etudiant;
  form: FormGroup;
  pubs: Publication[];
  itempub: Publication ;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit( ): void {
    this.currentpubId = this.activatedRoute.snapshot.params.idp;
    if (!!this.currentpubId) {
      this.getPubByid(this.currentpubId);
      
    } else {
      this.initForm(null);
    }
  }
// @ts-ignore
  getPubByid(id: string): void {
  this.memberService.getPublication().then(pubs => {
    this.pubs = pubs;
    pubs.forEach(elt => {
        console.log(elt.id);
        // tslint:disable-next-line:no-conditional-assignment
        if ( id.localeCompare(elt.id) === 0){
          this.itempub = elt ;
          this.initForm(this.itempub);

          
        }
      }
    );

  });
}
initForm(item: Publication): void {
  this.form = new FormGroup({
    date: new FormControl(item?.date, [Validators.required]),
    titre: new FormControl(item?.titre, [Validators.required]),
    lien: new FormControl(item?.lien, [Validators.required]),
    sourcepdf: new FormControl(item?.sourcepdf, [Validators.required]),
    type: new FormControl(item?.type, [Validators.required]),

  });
}
isFormInEditMode(): boolean {
  return !!this.currentpubId;
}
onSubmit(): void {
  const objectToSubmit = {...this.itempub, ...this.form.value};
  console.log(objectToSubmit);
  if (this.isFormInEditMode()) {
  this.memberService.updatePublication(this.currentpubId, objectToSubmit).then(() => {
    this.router.navigate(['./members']);
  });
} else {
  this.memberService.createPublication(objectToSubmit).then(() => {
    this.router.navigate(['./members']);
  });
}
}
}
