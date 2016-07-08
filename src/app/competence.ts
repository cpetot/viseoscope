export class Competence {
  type: string = "";
  name : string = "";

  constructor(type? : string, name? : string) {
    if(type)
      this.type = type;
    if(name)
      this.name = name;
  }
}
