import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'labFilter'
})

export class LabFilter implements PipeTransform{
  transform(labs:any , searchVal:any):any{
    if(!searchVal) return labs;
    return labs.filter(
      (l:any)=>
      l.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ||
      l.description.toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      l.departmentName.toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      l.roomNum.toString().toLowerCase().indexOf(searchVal.toLowerCase())>-1
      )
  }
  }
