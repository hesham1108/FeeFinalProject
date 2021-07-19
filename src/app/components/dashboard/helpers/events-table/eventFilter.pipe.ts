import {Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'efilter'
})
export class EventFilter implements PipeTransform{
  transform(val:any , serachVal:any):any{
    if(!serachVal) return val;
    return val.filter(
      (e:any)=>
      e.title.toLowerCase().indexOf(serachVal.toLowerCase()) > -1 ||
      e.createdAt.toLowerCase().indexOf(serachVal.toLowerCase())>-1 ||
      e.description.toLowerCase().indexOf(serachVal.toLowerCase())>-1 )
  }
}
