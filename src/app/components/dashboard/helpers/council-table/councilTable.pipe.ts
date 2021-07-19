import {Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'councilFilter'
})
export class CouncilFilter implements PipeTransform{
  transform(councils:any , serachVal:any):any{
    if(!serachVal) return councils;
    return councils.filter(
      (c:any)=>
      c.title.toLowerCase().indexOf(serachVal.toLowerCase()) > -1 ||
      c.details.toLowerCase().indexOf(serachVal.toLowerCase())>-1 ||
      c.departmentName.toLowerCase().indexOf(serachVal.toLowerCase())>-1 )
  }
}
