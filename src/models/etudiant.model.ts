import {EnseignantChercheur} from './enseignantChercheur.model';
import {Member} from './member.model';

export class Etudiant extends Member{
  sujet: string;
  diplome: string;
  encadrant: EnseignantChercheur;
}
