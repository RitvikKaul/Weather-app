import { numberAttribute, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(kelvin:number) {
    const celsius = kelvin - 273.15 as number;
    return celsius.toFixed() as any; 
  }

}
