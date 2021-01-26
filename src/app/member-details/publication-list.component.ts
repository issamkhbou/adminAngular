import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Member} from '../../models/member.model';
import {Publication} from '../../models/publication.model';
import {Outil} from '../../models/outil.model';
import {Events} from '../../models/Events.model';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.scss']
})
export class PublicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titre', 'type', 'date', 'lien', 'sourcepdf', 'actions'];
  displayedColumnsOutil: string[] = ['id', 'date', 'source', 'actions'];
  displayedColumnsEvent: string[] = ['id', 'titre', 'date' , 'lieu', 'actions'];

  currentItemId: string;
  item: Publication[] = [];
  item2: Outil[] = [] ;
  item3: Events[] = [] ;
  currentList ="publications" 
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    this.fetchDataSourcePub(this.currentItemId);
    this.fetchDataSourceOutil(this.currentItemId);
    this.fetchDataSourceEvents(this.currentItemId);

  }
  fetchDataSourcePub(currentItemId: string): void {
    if (!!this.currentItemId) {
      this.memberService.getPublicationByMember(this.currentItemId).then(item => {
        this.item = item.pubs;
        console.log(item);
        console.log(this.item);
      });
    }
  }
  fetchDataSourceOutil(currentItemId: string): void {
    if (!!this.currentItemId) {
      this.memberService.getOutilsByMember(this.currentItemId).then(item => {
        this.item2 = item;
        console.log(this.item2);
      });
    }
  }
  fetchDataSourceEvents(currentItemId: string): void {
    if (!!this.currentItemId) {
      this.memberService.getEventsByMember(this.currentItemId).then(item => {
        this.item3 = item;
        console.log(this.item3);
      });
    }
  }


  changeCurrentListToTools() {
    this.currentList = 'outils';
  }

  changeCurrentListToPub() {
    this.currentList = 'publications';
  }

  changeCurrentListToEvents() {
    this.currentList = 'evenements';
    console.log(this.currentList);
  }

}
