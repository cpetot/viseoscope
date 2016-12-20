import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Collaborator} from "../collaborator";

@Component({
  selector: 'viseo-collaborator-detail',
  templateUrl: './collaborator-detail.component.html',
  styleUrls: ['./collaborator-detail.component.css'],
})
export class CollaboratorDetailComponent implements OnInit {
  @Input() collaborator: Collaborator;
  @Input() creation: boolean = false;
  //utile pour le double-databing
  @Output() createRequest: EventEmitter<Collaborator> = new EventEmitter<Collaborator>();

  constructor() {
  }

  ngOnInit() {
  }

  onCreate(collaborator : Collaborator) {
    this.creation = false;
    //on informe le composant parent que l'on a fini de créer le collaborateur
    this.createRequest.emit(collaborator);
  }
}
