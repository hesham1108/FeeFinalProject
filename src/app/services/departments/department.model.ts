export class Department{
  id:number;
  name:string;
  description:string;
  vision:string;
  message:string;
  goals:string;
  headSpeech:string;
  constructor(
    id:number ,
    name:string,
    description:string,
    vision:string,
    message:string,
    goals:string,
    headSpeech:string,
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.vision=vision;
    this.message=message;
    this.goals=goals;
    this.headSpeech=headSpeech;
  }
}
