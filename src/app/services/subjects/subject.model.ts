
export class Subject{
  public id:number;
  public title:string;
  public codeAr:string;
  public codeEn:string;
  public numOfHours:number;
  public maxDegree:number;
  public minDegree:number;
  public content:string;
  public dependOn:[];

  constructor(
    id:number,
    title:string,
    codeAr:string,
    codeEn:string,
    numOfHours:number,
    maxDegree:number,
    minDegree:number,
    content:string,
    dependOn:[]
    ){
    this.id = id ;
    this.title=title;
    this.codeAr = codeAr;
    this.codeEn = codeEn;
    this.numOfHours = numOfHours;
    this.maxDegree = maxDegree;
    this.minDegree = minDegree;
    this.content = content;
    this.dependOn = dependOn
  }

}
