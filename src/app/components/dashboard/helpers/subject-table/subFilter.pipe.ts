import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'subFilter'
})

export class SubFilter implements PipeTransform{
  transform(subjects:any , searchVal:any):any{
    if(!searchVal) return subjects;
    return subjects.filter(
      (s:any)=>
      s.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1 ||
      s.codeAR.toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      s.codeEN.toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      s.numOfHours.toString().toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      s.maxDegree.toString().toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      s.minDegree.toString().toLowerCase().indexOf(searchVal.toLowerCase())>-1 ||
      s.content.toLowerCase().toLowerCase().indexOf(searchVal.toLowerCase())>-1
      )
  }
  }
