import {Competence} from './competence';

describe('Competence', () => {
  it('should create an instance', () => {
    expect(new Competence()).toBeTruthy();
  });

  it('should create an instance with a name and a type', () => {
    let comp : Competence = new Competence("Développement", "Javascript");
    expect(comp.type).toBe("Développement");
    expect(comp.name).toBe("Javascript");
  });
});
