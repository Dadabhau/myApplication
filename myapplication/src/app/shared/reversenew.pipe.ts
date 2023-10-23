import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversenew'
})
export class ReversenewPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
