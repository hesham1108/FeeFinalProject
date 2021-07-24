export class Department{
  id:number;
  name:string;
  description:string;
  vision:string;
  massage:string;
  goals:string;
  headSpeech:string;
  image:any;
  constructor(
    id:number ,
    name:string,
    description:string,
    vision:string,
    message:string,
    goals:string,
    headSpeech:string,
    image:any
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.vision=vision;
    this.massage=message;
    this.goals=goals;
    this.headSpeech=headSpeech;
    this.image = image;
  }
}
