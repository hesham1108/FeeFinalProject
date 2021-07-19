import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class NewsFilter implements PipeTransform {
  transform(news: any, searchValue:any): any {
    if (!searchValue) return news;
    return news.filter(
      (v:any) =>
    v.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ||
    v.createdAt.toLowerCase().indexOf(searchValue.toLowerCase())>-1 ||
    v.description.toLowerCase().indexOf(searchValue.toLowerCase())>-1 )

  }

}
