import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'MbFilter'
})
export class MainBarFilter implements PipeTransform{
  transform( deps:any , serachVal:any):any{
    if(!serachVal) return deps;
    return deps.filter(
      (d:any)=>
      d.title.toLowerCase().indexOf(serachVal.toLowerCase()) > -1
    )
  }
}
