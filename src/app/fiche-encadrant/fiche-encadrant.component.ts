import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {EnseignantChercheur} from '../../models/enseignantChercheur.model';
import {Member} from '../../models/member.model';

@Component({
  selector: 'app-fiche-encadrant',
  templateUrl: './fiche-encadrant.component.html',
  styleUrls: ['./fiche-encadrant.component.scss']
})
export class FicheEncadrantComponent implements OnInit {
  currentItemId: string;
  Memencadrant: Member;
  encadrant: EnseignantChercheur;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    if (!!this.currentItemId) {
    this.memberService.getMemberById(this.currentItemId).then(Memencadrant => {
        this.encadrant  = Memencadrant.encadrant;
        this.Memencadrant = Memencadrant;
        console.log(this.encadrant);

      });
    }
  }

}
