import {Component, OnInit} from "@angular/core";
import {Collaborator} from "../collaborator";
import {CollaboratorService} from "../collaborator.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'viseo-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css'],
  providers: [CollaboratorService]
})
export class CollaboratorsComponent implements OnInit {
  collaborators: Array<Collaborator> = [];
  selectedCollaborator: Collaborator;

  /**
   * Variable qui contiendra l'objet observable de la route actuelle
   * Cela permet de ne pas recharger le composant et de le détruire
   * Si nous changeons juste le paramètre de la page
   **/
  private sub: any;

  constructor(private _collaboratorService: CollaboratorService, private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.collaborators = this._collaboratorService.getCollaborators();
    this.sub = this._activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      this.selectedCollaborator = this._collaboratorService.getCollaborator(id);
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onCollaboratorSelected(collaborator: Collaborator) {
    this.selectedCollaborator = collaborator;
  }

}
