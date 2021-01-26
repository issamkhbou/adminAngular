import { Injectable } from '@angular/core';
import {GLOBAL} from '../app/app-config';
import {Member} from '../models/member.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {MembreListComponent} from '../app/membre-list/membre-list.component';
import {Outil} from '../models/outil.model';
import {Events} from '../models/Events.model';
import {Etudiant} from '../models/etudiant.model';
import {EnseignantChercheur} from '../models/enseignantChercheur.model';
import {Publication} from '../models/publication.model';
import {MembreOutil} from '../models/Membre_Outil.model';
import {MembreEvent} from '../models/Member_Events.model';
import {MembrePub} from '../models/Membre_Pub.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private path = `${environment.gatewayEndpoint}/membre-service`;
  // @ts-ignore
  public placeholderMembers: Member[] = GLOBAL._DB.members;

  constructor(
    private httpClient: HttpClient,
  ) {
  }
  getAllEtudiantsMembers(): Promise<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>(`${this.path}/membrestype?type=etd`).toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }
  getAllEnseniantMembers(): Promise<EnseignantChercheur[]> {
    return this.httpClient.get<EnseignantChercheur[]>(`${this.path}/membrestype?type=ens`).toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }

  getAllMembers(): Promise<Member[]> {
    return this.httpClient.get<Member[]>(`${this.path}/membres`).toPromise();
    // return new Promise(resolve => resolve(this.placeholderMembers));
  }
  getMemberById(id: string): Promise<Member> {
    return this.httpClient.get<Member>(`${this.path}/membre/${id}`).toPromise();

  }

  getMemberByEmail(email: string): Promise<Member> {
    return this.httpClient
      .get<Member>(`${this.path}/membre/search/email`, {
        params: { email: email },
      })
      .toPromise();
  }
  
  getPublicationByMember(id: string): Promise<Member> {
    return this.httpClient.get<Member>(`${this.path}/fullmember/${id}`).toPromise();

  }
  getOutilsByMember(id: string): Promise<Outil[]> {
    return this.httpClient.get<Outil[]>(`${this.path}/outils/auteur/${id}`).toPromise();
  }
  getEventsByMember(id: string): Promise<Events[]> {
    return this.httpClient.get<Events[]>(`${this.path}/events/auteur/${id}`).toPromise();


  }
  getEtudiantByEnseignat(id: string): Promise<Etudiant[]>{
    return this.httpClient.get<Etudiant[]>(`${this.path}/etudiantens/${id}`).toPromise();

  }
  getPublication(): Promise<Publication[]> {
    return this.httpClient.get<Publication[]>(`${this.path}/publications`).toPromise();
  }
  getOutils(): Promise<Outil[]> {
    return this.httpClient.get<Outil[]>(`${this.path}/outils`).toPromise();
  }
  getEvents(): Promise<Events[]> {
    return this.httpClient.get<Events[]>(`${this.path}/evenements`).toPromise();


  }

  getlisterOutilDistincts(id: string): Promise<Outil[]> {
  return this.httpClient.get<Outil[]>(`${this.path}/outils/distincts/${id}`).toPromise();


}
  getlisterEventDistincts(id: string): Promise<Events[]> {
    return this.httpClient.get<Events[]>(`${this.path}/events/distincts/${id}`).toPromise();


  }
  getlisterpubsDistincts(id: string): Promise<Publication[]> {
    return this.httpClient.get<Publication[]>(`${this.path}/pubs/distincts/${id}`).toPromise();


  }

  /**
   * create a new member or update an old member.
   * a new member doesn't have an id
   */


  createMember(member: any): Promise<Member> {
    return this.httpClient.post<Member>(`${this.path}/membres/etudiant`, member).toPromise();
  }

  updateMember(id: string, member: any): Promise<Member> {
    return this.httpClient.put<Member>(`${this.path}/membres/etudiant/${id}`, member).toPromise();
  }
  createEtudiant(etudiant: any): Promise<Etudiant> {
    return this.httpClient.post<Etudiant>(`${this.path}/membres/etudiant`, etudiant).toPromise();
  }

  updateEtudiant(id: string, etudiant: any): Promise<Etudiant> {
    return this.httpClient.put<Etudiant>(`${this.path}/membres/etudiants/${id}`, etudiant).toPromise();
  }
  updateEnseigant(id: string, enseigantChercheur: any): Promise<EnseignantChercheur> {
    return this.httpClient.put<EnseignantChercheur>(`${this.path}/membres/enseignant/${id}`, enseigantChercheur).toPromise();
  }


  createEnseigant(enseigant: any): Promise<EnseignantChercheur> {
    return this.httpClient.post<EnseignantChercheur>(`${this.path}/membres/enseignant`, enseigant).toPromise();
  }






  updateOutil(id: string, outil: any): Promise<Outil> {
    return this.httpClient.put<Outil>(`${this.path}/membres/Outil/${id}`, outil).toPromise();
  }
  createOutil(outil: any): Promise<Outil> {
    return this.httpClient.post<Outil>(`${this.path}/membres/outi`, outil).toPromise();
  }


  affectermMembretoOutil(id1: string , id2: string): Promise<MembreOutil>{
    // @ts-ignore
    return this.httpClient.post<MembreOutil>(`${this.path}/membres/affecteroutil/${id1}/${id2}`).toPromise();
  }
  affectermMembretoEvent(id1: string , id2: string): Promise<MembreEvent>{
    // @ts-ignore
    return this.httpClient.post<MembreEvent>(`${this.path}/membres/affecterevent/${id1}/${id2}`).toPromise();
  }
  affectermMembretoPub(id1: string , id2: string): Promise<MembrePub>{
    // @ts-ignore
    return this.httpClient.post<MembrePub>(`${this.path}/membres/affecterpub/${id1}/${id2}`).toPromise();
  }
  affectermEcadrantToetudiant(id1: string , id2: string): Promise<Member>{
    // @ts-ignore
    return this.httpClient.post<Member>(`${this.path}/membres/etudiant/${id1}/${id2}`).toPromise();
  }


  updateEvents(id: string, events: any): Promise<Events> {
    return this.httpClient.put<Events>(`${this.path}/membres/evenement/${id}`, events).toPromise();
  }
  createEvents(events: any): Promise<Events> {
    return this.httpClient.post<Events>(`${this.path}/membres/event`, events).toPromise();
  }
  updatePublication(id: string, publication: any): Promise<Publication> {
    return this.httpClient.put<Publication>(`${this.path}/membres/publication/${id}`, publication).toPromise();
  }
  createPublication(publication: any): Promise<Publication> {
    return this.httpClient.post<Publication>(`${this.path}/membres/etudiant`, publication).toPromise();
  }


  removeMemberById(id: string): Promise<void> {
    return this.httpClient.delete<void>(`${this.path}/membres/${id}`).toPromise();
  }

  removeOutilById(id: string): Promise<void> {
    return this.httpClient.delete<void>(`${this.path}/out/${id}`).toPromise();
  }
  removeEventById(id: string): Promise<void> {
    return this.httpClient.delete<void>(`${this.path}/even/${id}`).toPromise();
  }
}
