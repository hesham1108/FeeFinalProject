export class Card{
  public title: string;
  public category:string;
  public date:string;
  public  img : string;
  public  desc: string;
  public link: string;


  constructor( title: string,category:string , date:string,  img : string ,   desc: string,  link: string){
    this.title = title;
    this.category = category;
    this.date = date;
    this.img = img;
    this.desc = desc;
    this.link = link;

  }
}
