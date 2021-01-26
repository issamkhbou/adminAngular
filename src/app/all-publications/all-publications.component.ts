import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from '../../services/member.service';
import { Publication } from '../../models/publication.model';
import { Outil } from '../../models/outil.model';
import { Events } from '../../models/Events.model';

@Component({
  selector: 'app-all-publications',
  templateUrl: './all-publications.component.html',
  styleUrls: ['./all-publications.component.scss'],
})
export class AllPublicationsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'titre',
    'type',
    'date',
    'lien',
    'sourcepdf',
    'actions',
  ];

  currentItemId: string;
  item: Publication[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.fetchDataSourcePub();
  }
  fetchDataSourcePub(): void {
    this.memberService.getPublication().then((data) => {
      this.item = data;
      console.log(this.item);
    });
  }
}
