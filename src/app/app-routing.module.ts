import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembreListComponent } from './membre-list/membre-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
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
import { AllPublicationsComponent } from './all-publications/all-publications.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },

  {
    path: 'allPublications',
    pathMatch: 'full',
    component: AllPublicationsComponent,
  },

  {
    path: 'members',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MembreListComponent,
      },
      {
        path: 'create',
        pathMatch: 'full',
        component: MemberFormComponent,
      },
      {
        path: ':id/etudiant',
        pathMatch: 'full',
        component: ListesDesEtudiantsComponent,
      },
      {
        path: ':id/editEncadrant',
        pathMatch: 'full',
        component: ChangerEncadrantsComponent,
      },
      {
        path: ':id/edit',
        pathMatch: 'full',
        component: MemberFormComponent,
      },
      {
        path: ':id/ficheencadren',
        pathMatch: 'full',
        component: FicheEncadrantComponent,
      },
      {
        path: 'createEtd',
        pathMatch: 'full',
        component: EtudiantFormComponent,
      },
      {
        path: ':id/editEtd',
        pathMatch: 'full',
        component: EtudiantFormComponent,
      },
      {
        path: 'createEns',
        pathMatch: 'full',
        component: EnseignantFormComponent,
      },
      {
        path: ':id/editEns',
        pathMatch: 'full',
        component: EnseignantFormComponent,
      },
      {
        path: ':id/pub',
        pathMatch: 'full',
        component: PublicationListComponent,
      },
      {
        path: ':id/pub',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: MembreListComponent,
          },
          {
            path: ':idp/editpubs',
            pathMatch: 'full',
            component: PubsFormComponent,
          },
          {
            path: 'affercterpub',
            pathMatch: 'full',
            component: AddPubTomembreComponent,
          },
          {
            path: 'createpub',
            pathMatch: 'full',
            component: PubsFormComponent,
          },
          {
            path: ':ido/editoutil',
            pathMatch: 'full',
            component: OutilFormComponent,
          },
          {
            path: 'createoutil',
            pathMatch: 'full',
            component: OutilFormComponent,
          },
          {
            path: 'affercteroutil',
            pathMatch: 'full',
            component: AddoutiltomembreComponent,
          },
          {
            path: ':ide/editevents',
            pathMatch: 'full',
            component: EventsFormComponent,
          },
          {
            path: 'createevent',
            pathMatch: 'full',
            component: EventsFormComponent,
          },
          {
            path: 'affercterevent',
            pathMatch: 'full',
            component: AddEventsTomembreComponent,
          },
        ],
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },

  {
    path: 'outil',
    pathMatch: 'full',
    component: OutilListComponent,
  },
  {
    path: 'outil',
    children: [
      {
        path: ':ido/editoutil',
        pathMatch: 'full',
        component: OutilFormComponent,
      },
      {
        path: 'createoutil',
        pathMatch: 'full',
        component: OutilFormComponent,
      },
    ],
  },
  {
    path: 'evenemnt',
    pathMatch: 'full',
    component: EventListComponent,
  },
  {
    path: 'evenemnt',
    children: [
      {
        path: ':ide/editevents',
        pathMatch: 'full',
        component: EventsFormComponent,
      },
      {
        path: 'createevent',
        pathMatch: 'full',
        component: EventsFormComponent,
      },
    ],
  },
  {
    path: 'publication',
    pathMatch: 'full',
    component: PublicationListComponent,
  },
  {
    path: 'publication',
    children: [
      {
        path: ':ide/editevents',
        pathMatch: 'full',
        component: EventsFormComponent,
      },
      {
        path: 'createevent',
        pathMatch: 'full',
        component: EventsFormComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'members',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
