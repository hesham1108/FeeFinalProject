
export class Subject{
  public id:number;
  public name:string;
  public codeAR:string;
  public codeEN:string;
  public numOfHours:number;
  public maxDegree:number;
  public minDegree:number;
  public content:string;
  public departmentID:number;

  constructor(
    id:number,
    name:string,
    codeAR:string,
    codeEN:string,
    numOfHours:number,
    maxDegree:number,
    minDegree:number,
    content:string,
    departmentID:number
    ){
    this.id = id ;
    this.name=name;
    this.codeAR = codeAR;
    this.codeEN = codeEN;
    this.numOfHours = numOfHours;
    this.maxDegree = maxDegree;
    this.minDegree = minDegree;
    this.content = content;
    this.departmentID = departmentID
  }

}
