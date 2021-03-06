import {Component, OnInit} from "@angular/core";
import {Collaborator} from "../collaborator";

@Component({
  selector: 'viseo-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.css']
})
export class CollaboratorsComponent implements OnInit {
  collaborators: Array<Collaborator> = [
    new Collaborator(1, 'Petot', 'Claude'),
    new Collaborator(2, 'Soler', 'Jonathan')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
