import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member.model';
import {Outil} from '../../models/outil.model';

@Component({
  selector: 'app-addoutiltomembre',
  templateUrl: './addoutiltomembre.component.html',
  styleUrls: ['./addoutiltomembre.component.scss']
})
export class AddoutiltomembreComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }
  selectedValue: string;
  currentItemId: string ;
  form: FormGroup;
  data: Outil[];
  dataM: Member;

  radioSelected = '';
  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentItemId);


    if (this.currentItemId) {
      console.log(this.currentItemId);
      this.memberService.getlisterOutilDistincts(this.currentItemId).then(data => {
        this.data = data;
        console.log(this.data);
      });
    }
  }
  onSubmit(selectedValue): void {
      console.log(selectedValue.id);
      this.memberService.affectermMembretoOutil(this.currentItemId, selectedValue.id ).then(() => {
        this.router.navigate(['./members']);
      });
  }
}
