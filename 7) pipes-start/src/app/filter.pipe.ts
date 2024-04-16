import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  /* Le pipe possono essere utilizzate anche per filtrare contenuti
  * filterString rappresenta l'input che inserisce l'utente,
  * propName la proprietà di un oggetto,
  * il valore è quello che viene dato in ingresso, in questo caso è un array*/
  transform(value: any, filterString: string, propName: string): unknown {

    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];

    for (let item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;

  }

}
