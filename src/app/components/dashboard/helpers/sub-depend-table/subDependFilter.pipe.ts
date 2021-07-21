import {Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name:'subDependFilter'
})
export class SubDependFilter implements PipeTransform{
  transform(val:any , serachVal:any):any{
    if(!serachVal) return val;
    return val.filter(
      (sd:any)=>
      sd.subject.toLowerCase().indexOf(serachVal.toLowerCase()) > -1 ||
      sd.depend.toLowerCase().indexOf(serachVal.toLowerCase())>-1  )
  }
}
