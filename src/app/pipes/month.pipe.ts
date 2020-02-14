import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const tabMois= ['Jan','Fev','Mars','Avril','Mai','Juin','Juil','Aout','Sept','Oct',"Nov",'dec'];
    let mois=value.getMonth();
    return tabMois[mois];
  }

}
