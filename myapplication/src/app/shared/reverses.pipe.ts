import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): any {
    if (typeof value !== 'string') {
      return value;
    }
    return value.split('').reverse().join();
  }
}
