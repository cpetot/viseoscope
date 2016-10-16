import {Collaborator} from "../collaborator";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viseo-collaborator-detail',
  templateUrl: './collaborator-detail.component.html',
  styleUrls: ['./collaborator-detail.component.css']
})
export class CollaboratorDetailComponent implements OnInit {

  constructor() { }

  @Input()
  private collaborator :  Collaborator;

  ngOnInit() {
  }

}
