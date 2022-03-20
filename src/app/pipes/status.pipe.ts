import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'Todo':
                return 'Sin empezar';
            case 'InProgress':
                return 'En curso';
            case 'Completed':
                return 'Finalizado';
            case 'Canceled':
                return 'Cancelado';
            default:
                return 'Sin definir';
        }
    }
}