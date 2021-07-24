import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'depFilter'
})
export class DepFilter implements PipeTransform{
  transform( deps:any , serachVal:any):any{
    if(!serachVal) return deps;
    return deps.filter(
      (d:any)=>
      d.name.toLowerCase().indexOf(serachVal.toLowerCase()) > -1
    )
  }
}
