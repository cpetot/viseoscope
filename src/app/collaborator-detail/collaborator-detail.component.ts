import {Component, OnInit, Input} from "@angular/core";
import {Collaborator} from "../collaborator";

@Component({
  selector: 'viseo-collaborator-detail',
  templateUrl: './collaborator-detail.component.html',
  styleUrls: ['./collaborator-detail.component.css']
})
export class CollaboratorDetailComponent implements OnInit {
  @Input() collaborator: Collaborator;

  constructor() {
  }

  ngOnInit() {

  }
}
