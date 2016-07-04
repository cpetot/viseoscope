import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../collaborator';
import { Router, ActivatedRoute } from '@angular/router';
import { CollaboratorDetailComponent } from '../collaborator-detail/collaborator-detail.component';
import { CollaboratorService } from '../collaborator.service'

@Component({
  moduleId: module.id,
  selector: 'viseo-collaborators',
  templateUrl: 'collaborators.component.html',
  styleUrls: ['collaborators.component.css'],
  directives : [CollaboratorDetailComponent]
})
export class CollaboratorsComponent implements OnInit {
  collaborators : Array<Collaborator> = [];
  selectedCollaborator : Collaborator;
  creation : boolean = false;

  /**
  * Variable qui contiendra l'objet observable de la route actuelle
  * Cela permet de ne pas recharger le composant et de le détruire
  * Si nous changeons juste le paramètre de la page
  **/
  private sub : any;

  constructor(private _collaboratorService : CollaboratorService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._collaboratorService.getCollaborators().then((collaborators) => this.collaborators = collaborators);
    this.sub = this._activatedRoute.params.subscribe(params => {
        let id = +params['id'];
        this._collaboratorService.getCollaborator(id)
          .then(collaborator => this.selectedCollaborator = collaborator)
      });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onCollaboratorSelected(collaborator : Collaborator) {
    this.selectedCollaborator = collaborator;
    this.creation = false;
  }

  onCreate() {
    this.creation = true;
    let id = this._collaboratorService.generateCollaboratorID();
    this.selectedCollaborator = new Collaborator(id, '' , '')
  }

}
