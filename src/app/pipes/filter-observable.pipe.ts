import { Pipe, PipeTransform } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Pipe({
  name: 'filterObs'
})
export class FilterObservablePipe implements PipeTransform {

  transform(value: Observable<any[]>, key: string, search: any): Observable<any[]> {
    return value.pipe(
      map((v) => v.filter((vv) => {
        if (typeof vv?.[key] === 'string') {
          return vv?.[key]?.toLowerCase()?.includes(search.toLowerCase()?.trim());
        } else if (vv?.[key] instanceof Array) {
          return vv?.[key]?.includes(search);
        }
        return vv?.[key] === search;
      }))
    );
  }

}
