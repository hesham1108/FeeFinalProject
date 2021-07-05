// export class Card{
//   public title: string;
//   public description: string;
//   public imagePath : string;
//   public expired:boolean;
//   public newsSubImages:[];
//   public id:number;
//   public createdAt:string;
//   public createdUser: string;
//   public createdById: number;
//   // public category:string;


//   constructor(
//     title: string,
//     description: string ,
//     imagePath : string ,
//     newsSubImages:[],
//     expired:boolean,
//     id:number ,
//     createdAt:string,
//     createdUser: string,
//     createdById: number,
//     // category:string ,
//     ){
//       this.title          = title;
//       this.description    = description;
//       this.imagePath      = imagePath;
//       this.newsSubImages  = newsSubImages;
//       this.expired        = expired;
//       this.id             = id;
//       this.createdAt      = createdAt;
//       this.createdUser    = createdUser;
//       this.createdById    = createdById;
//       // this.category       = category;


//   }
// }


export interface Card{

     title: string;
     description: string;
     imagePath : string;
     expired:boolean;
     newsSubImages:[];
     id:number;
     createdAt:string;
     createdUser: string;
     createdById: string;
}
