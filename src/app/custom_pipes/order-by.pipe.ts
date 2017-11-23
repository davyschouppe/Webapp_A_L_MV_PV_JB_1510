import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: Array<Object>, args: Object): Array<Object> {
    if(array) {
      array.sort((a: any, b: any) => {
        if (a.nr < b.nr) {
          return -1;
        } else if (a.nr > b.nr) {
          return 1;
        } else {
          return 0;
        }
      });
      return array;
    }
  }

}
