import {Publication} from './publication.model';
import {EnseignantChercheur} from './enseignantChercheur.model';

export class Member {
  id: string;
  cin: string;
  nom: string;
  prenom: string;
  dateNaissance: string;
  cv: string;
  photo: string;
  email: string;
  password: string;
  pubs: Publication[];
  encadrant: EnseignantChercheur;

}
