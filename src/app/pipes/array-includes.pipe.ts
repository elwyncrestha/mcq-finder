import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayIncludes'
})
export class ArrayIncludesPipe implements PipeTransform {

  transform(array: any[] | undefined, check: any): boolean {
    return !!array?.includes(check);
  }

}
