import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsForList',
})
export class StarsForListPipe implements PipeTransform {
  transform(value: string): string {
    const star = '<i class="fa fa-star icon-primary"></i>';
    const starO = '<i class="fa fa-star-o icon-primary"></i>';
    let string = '';
    switch (value) {
      case '1':
        string = star.repeat(1) + starO.repeat(4);
        break;
      case '2':
        string = star.repeat(2) + starO.repeat(3);
        break;
      case '3':
        string = star.repeat(3) + starO.repeat(2);
        break;
      case '4':
        string = star.repeat(4) + starO;
        break;
      case '5':
        string = star.repeat(5);
        break;
      default:
        string = 'perro';
        break;
    }
    return string;
  }
}
