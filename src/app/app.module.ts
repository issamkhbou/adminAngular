import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembreListComponent } from './membre-list/membre-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MemberFormComponent } from './member-form/member-form.component';
import {SharedModule} from './@root/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicationListComponent } from './member-details/publication-list.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { EnseignantFormComponent } from './enseignant-form/enseignant-form.component';
import { PubsFormComponent } from './publication-form/pubs-form.component';
import { OutilFormComponent } from './outil-form/outil-form.component';
import { EventsFormComponent } from './evenement-form/events-form.component';
import { OutilListComponent } from './outil-list/outil-list.component';
import { AddoutiltomembreComponent } from './addoutiltomembre/addoutiltomembre.component';
import { AddEventsTomembreComponent } from './add-events-tomembre/add-events-tomembre.component';
import { AddPubTomembreComponent } from './add-pub-tomembre/add-pub-tomembre.component';
import { EventListComponent } from './evenement-list/event-list.component';
import { FicheEncadrantComponent } from './fiche-encadrant/fiche-encadrant.component';
import { ChangerEncadrantsComponent } from './changer-encadrants/changer-encadrants.component';
import { ListesDesEtudiantsComponent } from './listes-des-etudiants/listes-des-etudiants.component';
import { AddEtudiantToEnsComponent } from './add-etudiant-to-ens/add-etudiant-to-ens.component';
import { GoogleSigninDirective } from './google-signin.directive';
import { AllPublicationsComponent } from './all-publications/all-publications.component';

@NgModule({
  declarations: [
    AppComponent,
    MembreListComponent,
    MemberFormComponent,
    LayoutComponent,
    DashboardComponent,
    PublicationListComponent,
    EtudiantFormComponent,
    EnseignantFormComponent,
    PubsFormComponent,
    OutilFormComponent,
    EventsFormComponent,
    OutilListComponent,
    AddoutiltomembreComponent,
    AddEventsTomembreComponent,
    AddPubTomembreComponent,
    EventListComponent,
    FicheEncadrantComponent,
    ChangerEncadrantsComponent,
    ListesDesEtudiantsComponent,
    AddEtudiantToEnsComponent,
    GoogleSigninDirective,
    AllPublicationsComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    /*MatTableModule,
    MatIconModule,*/
    SharedModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
