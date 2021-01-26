import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {PublicationListComponent} from '../member-details/publication-list.component';
import {Etudiant} from '../../models/etudiant.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Outil} from '../../models/outil.model';
import {MembreListComponent} from '../membre-list/membre-list.component';
import {Member} from '../../models/member.model';

@Component({
  selector: 'app-outil-form',
  templateUrl: './outil-form.component.html',
  styleUrls: ['./outil-form.component.scss']
})
export class OutilFormComponent implements OnInit {
  currentoutilId: string;
  item: Etudiant;
  form: FormGroup;
  outil: Outil[];
  itemoutil: Outil ;
  membre: Promise<Member>;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentoutilId = this.activatedRoute.snapshot.params.ido;
    if (!!this.currentoutilId) {
      this.getOutilByid(this.currentoutilId);
    } else {
      this.initForm(null);
    }
  }
// @ts-ignore
  getOutilByid(id: string): void {
    this.memberService.getOutils().then(outil => {
      this.outil = outil;
      outil.forEach(elt => {
        console.log(elt.id);
          // tslint:disable-next-line:no-conditional-assignment
        if ( id.localeCompare(elt.id) === 0){
            this.itemoutil = elt ;
            this.initForm(this.itemoutil);
          }
        }
      );

    });
  }
  initForm(item: Outil): void {
    this.form = new FormGroup({
      date: new FormControl(item?.date, [Validators.required]),
      source: new FormControl(item?.source, [Validators.required]),
    });
  }
  isFormInEditMode(): boolean {
    return !!this.currentoutilId;
  }
  onSubmit(): void {
    const objectToSubmit = {...this.itemoutil, ...this.form.value};
    console.log(objectToSubmit);
    if (this.isFormInEditMode()) {
      this.memberService.updateOutil(this.currentoutilId, objectToSubmit).then(() => {
        this.router.navigate(['./outil']);
      });
    } else {
      this.memberService.createOutil(objectToSubmit);
      this.router.navigate(['./outil']);
      /*this.membre = this.memberService.getMemberById(this.listcomp.currentItemId);
      this.memberService.affectermMembretoOutil(this.membre, objectToSubmit);*/
    }
  }
}
