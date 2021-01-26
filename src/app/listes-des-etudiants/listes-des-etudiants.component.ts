import { Component, OnInit } from '@angular/core';
import {Publication} from '../../models/publication.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../../services/member.service';
import {Etudiant} from '../../models/etudiant.model';

@Component({
  selector: 'app-listes-des-etudiants',
  templateUrl: './listes-des-etudiants.component.html',
  styleUrls: ['./listes-des-etudiants.component.scss']
})
export class ListesDesEtudiantsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'cin', 'nom', 'prenom', 'cv', 'email', 'diplome' , 'sujet','actions'];
  currentItemId: string;
  item: Etudiant[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private memberService: MemberService,
  ) { }

  ngOnInit(): void {
    this.currentItemId = this.activatedRoute.snapshot.params.id;
    this.fetchDataSource(this.currentItemId);
  }
  fetchDataSource(currentItemId: string): void {
    if (!!this.currentItemId) {
      this.memberService.getEtudiantByEnseignat(this.currentItemId).then(item => {
        this.item = item;
        console.log(item);
        console.log(this.item);
      });
    }
  }

}
