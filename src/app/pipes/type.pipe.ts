import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type',
})
export class TypePipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'brand':
        return 'Marca';
      case 'car':
        return 'Coche';
      case 'tournament':
        return 'Torneo';
      case 'user':
        return 'Usuario';
      default:
        return '';
    }
  }
}
