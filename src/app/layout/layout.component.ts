import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { MemberService } from 'src/services/member.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isLoggedIn: boolean;

  user;
  constructor(public memberService: MemberService) {}

  ngOnInit(): void {
  }
}
