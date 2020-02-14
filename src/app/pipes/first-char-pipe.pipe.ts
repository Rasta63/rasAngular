import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharPipe'
})
export class FirstCharPipePipe implements PipeTransform {


  transform(value: any, ...args: any[]): any {
    const nameTab = value.split(' ');
    let stringSplit = '';
    nameTab.forEach(word => {
      if (word[0]) {
        stringSplit += word[0];
      }
      
    });

    return stringSplit;
  }

}
