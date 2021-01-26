import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {FormGroup} from '@angular/forms';
import {Outil} from '../../models/outil.model';
import {EnseignantChercheur} from '../../models/enseignantChercheur.model';

@Component({
  selector: 'app-changer-encadrants',
  templateUrl: './changer-encadrants.component.html',
  styleUrls: ['./changer-encadrants.component.scss']
})
export class ChangerEncadrantsComponent implements OnInit {
  selectedValue: string;
  currentItemId: string ;
  form: FormGroup;
  data: EnseignantChercheur[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    this.memberService.getAllEnseniantMembers().then(data => {
      this.data = data;
    });
  }
  onSubmit(selectedValue): void {
    console.log(selectedValue.id);
    this.memberService.affectermEcadrantToetudiant(this.currentItemId, selectedValue.id ).then(() => {
      this.router.navigate(['./members']);
    });
  }
}
