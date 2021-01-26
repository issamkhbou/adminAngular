import {Member} from './member.model';
import {Etudiant} from './etudiant.model';

export class EnseignantChercheur extends Member{
  etablissement: string;
  grade: string;
  etudiants: Etudiant[];
}
