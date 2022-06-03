import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitPipe'
})
export class LimitPipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return value.slice(0, args[0]);
  }

}
