import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'pFilter'
})
export class PageFilter implements PipeTransform{
  transform( deps:any , serachVal:any):any{
    if(!serachVal) return deps;
    return deps.filter(
      (d:any)=>
      d.tilte.toLowerCase().indexOf(serachVal.toLowerCase()) > -1 ||
      d.descriptions.toLowerCase().indexOf(serachVal.toLowerCase()) > -1
    )
  }
}
