
export class Articolo{
  public name:string;
  public description:string;
  public imageUrl:string;
  public price:string;

  constructor(name: string, description: string, imageUrl: string, price:string) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price
  }
}
