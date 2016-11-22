import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'collaborators'
})
export class CollaboratorsPipe implements PipeTransform {

  // Transform is the new "return function(value, args)" in Angular 1.x
    transform(value, searchText: string) {

    if(value && searchText) {
      return value.filter(collaborator =>  collaborator.isMatch(searchText) );
    } else {
      return value;
    }
  }

}
