
export class ProfModel{

  public id:number;
  public img:string;
  public name:string ;
  public degree:string ;
  public depart:string ;
  public position:string;

  constructor(id:number ,img:string  ,name:string , degree:string,depart:string,position:string){
    this.id = id;
    this.img = img;
    this.name = name;
    this.degree = degree;
    this.depart = depart;
    this.position = position;
  }
}
