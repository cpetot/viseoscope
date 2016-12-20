import {Component, Input, SimpleChange} from "@angular/core";
import {Collaborator} from "../collaborator";
import {Competence} from "../competence";
import {CollaboratorService} from "../collaborator.service";

@Component({
  selector: 'viseo-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent {
  @Input() collaborator: Collaborator;

  newCompetence: Competence = new Competence();

  constructor(private _collaboratorService: CollaboratorService) {
  }

  //Ajoute la compétence au collaborator
  add(competence: Competence) {
    if (this.newCompetenceCheck()) {
      this._collaboratorService.addCompetence(this.collaborator, competence);
      this.newCompetence = new Competence();
    }
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    //A la modification du paramètre en entrée (collaborator), on remet à zéro le
    //champs de la nouvelle compétence
    this.newCompetence = new Competence();
  }

  //gère l'activation du bouton d'ajout de compétence selon certains critères
  newCompetenceCheck() {
    return this.newCompetence.type.trim().length > 0 && this.newCompetence.name.trim().length > 0;
  }
}
