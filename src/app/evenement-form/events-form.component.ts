import { Component, OnInit } from '@angular/core';
import {Etudiant} from '../../models/etudiant.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Outil} from '../../models/outil.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Events} from '../../models/Events.model';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {
  currenteventId: string;
  item: Etudiant;
  form: FormGroup;
  event: Events[];
  itemevent: Events ;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currenteventId = this.activatedRoute.snapshot.params.ide;
    if (!!this.currenteventId) {
      this.getEventsByid(this.currenteventId);
    } else {
      this.initForm(null);
    }
  }
// @ts-ignore
  getEventsByid(id: string): void {
    this.memberService.getEvents().then(event => {
      this.event = event;
      event.forEach(elt => {
          console.log(elt.id);
          // tslint:disable-next-line:no-conditional-assignment
          if ( id.localeCompare(elt.id) === 0){
            this.itemevent = elt ;
            this.initForm(this.itemevent);
          }
        }
      );

    });
  }
  initForm(item: Events): void {
    this.form = new FormGroup({
      date: new FormControl(item?.date, [Validators.required]),
      titre: new FormControl(item?.titre, [Validators.required]),
      lieu: new FormControl(item?.lieu, [Validators.required]),
    });
  }
  isFormInEditMode(): boolean {
    return !!this.currenteventId;
  }
  onSubmit(): void {
    const objectToSubmit = {...this.itemevent, ...this.form.value};
    console.log(objectToSubmit);
    if (this.isFormInEditMode()) {
      this.memberService.updateEvents(this.currenteventId, objectToSubmit).then(() => {
        this.router.navigate(['./evenemnt']);
      });
    } else {
      this.memberService.createEvents(objectToSubmit).then(() => {
        this.router.navigate(['./evenemnt']);
      });
    }
  }
}
