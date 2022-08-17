import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'type' })
export class TypePipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'app':
                return 'App';
            case 'auth':
                return 'Auth';
            case 'brand':
                return 'Marca';
            case 'brands':
                return 'Marcas';
            case 'car':
                return 'Coche';
            case 'cars':
                return 'Coches';
            case 'myData':
                return 'Mis datos';
            case 'myGarage':
                return 'Mi garaje';
            case 'myGarageImages':
                return 'Mi garage - imagenes';
            case 'myGarageOne':
                return 'Mi garage - coche';
            case 'myInscriptions':
                return 'Mis inscripciones';
            case 'myTrophies':
                return 'Mis Trofeos';
            case 'tournament':
                return 'Torneo';
            case 'tournaments':
                return 'Torneos';
            case 'user':
                return 'Usuario';
            case 'users':
                return 'Usuarios';
            case 'notification':
                return 'Notificaciones';
            case 'tabs':
                return 'Tabs';
            case 'dashboard':
                return 'Dashboard Usuario';
            case 'ranking':
                return 'Ranking';
            default:
                return 'Otro';
        }
    }
}
