import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {FormGroup} from '@angular/forms';
import {Events} from '../../models/Events.model';
import {Publication} from '../../models/publication.model';

@Component({
  selector: 'app-add-pub-tomembre',
  templateUrl: './add-pub-tomembre.component.html',
  styleUrls: ['./add-pub-tomembre.component.scss']
})
export class AddPubTomembreComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }
  selectedValue: string;
  currentItemId: string ;
  form: FormGroup;
  data: Publication[];
  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentItemId);


    if (this.currentItemId) {
      console.log(this.currentItemId);
      this.memberService.getlisterpubsDistincts(this.currentItemId).then(data => {
        this.data = data;
        console.log(this.data);
      });
    }
  }
  onSubmit(selectedValue): void {
    console.log(selectedValue.id);
    this.memberService.affectermMembretoPub(this.currentItemId, selectedValue.id ).then(() => {
      this.router.navigate(['./members']);
    });
  }
}
