import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {FormGroup} from '@angular/forms';
import {Events} from '../../models/Events.model';

@Component({
  selector: 'app-add-events-tomembre',
  templateUrl: './add-events-tomembre.component.html',
  styleUrls: ['./add-events-tomembre.component.scss']
})
export class AddEventsTomembreComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }
  selectedValue: string;
  currentItemId: string ;
  form: FormGroup;
  data: Events[];
  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    console.log(this.currentItemId);


    if (this.currentItemId) {
      console.log(this.currentItemId);
      this.memberService.getlisterEventDistincts(this.currentItemId).then(data => {
        this.data = data;
        console.log(this.data);
      });
    }
  }
  onSubmit(selectedValue): void {
    console.log(selectedValue.id);
    this.memberService.affectermMembretoEvent(this.currentItemId, selectedValue.id ).then(() => {
      this.router.navigate(['./members']);
    });
  }
}
