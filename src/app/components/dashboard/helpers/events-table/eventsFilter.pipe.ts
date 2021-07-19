import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'eventsFilter'
})
export class EventsFilter implements PipeTransform {
  transform(events: any, searchValue:any): any {
    if (!searchValue) return events;
    return events.filter(
      (v:any) =>
    v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.createdAt.toLowerCase().indexOf(searchValue.toLowerCase())>-1 ||
    v.description.toLowerCase().indexOf(searchValue.toLowerCase())>-1 )
  }

}
