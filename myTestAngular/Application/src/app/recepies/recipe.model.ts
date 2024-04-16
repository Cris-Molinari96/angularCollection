// Questa classe come nel backend, dovrebbe essere solo un punto di riferimento per la creazione dei nostri oggetti
// * Rappresenta una ricetta
export class Recipe{
// stiamo costruendo il nostro oggetto ricetta:
  public name: string;
  public description: string;
  public imageUrl:string;

  constructor(name: string, description: string, imageUrl: string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }
}
