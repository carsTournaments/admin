import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { flags } from 'assets/json/flags';
import {
    getChip,
    getChipDriverWithImage,
    getDateTimeago,
    getImageRounded,
    getStateChip,
} from './custom-table.helper';

export class CustomTableColumnsModel {
    defaults = {
        created: {
            header: 'Creado',
            field: 'created',
            sortable: true,
            width: '150px',
            formatter: (item: any) => getDateTimeago(item.created!),
        },
        updated: {
            header: 'Actualizado',
            field: 'updated',
            sortable: true,
            width: '150px',
            formatter: (item: any) => getDateTimeago(item.updated!),
        },
    };
    private data: any = {
        brands: [
            {
                header: '#',
                field: 'image.url',
                formatter: (item: any) => getImageRounded(item.image?.url),
            },
            { header: 'Nombre', field: 'name' },
            {
                header: 'Pais',
                field: 'country',
                formatter: (item: any) =>
                    getChip(item.country, false, '', 'dark'),
            },
            { header: 'Continente', field: 'continent' },
            {
                header: 'Coches',
                field: 'cars',
                formatter: (item: any) => {
                    return item.cars.length;
                },
            },
        ],
        cars: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (item: any) => getImageRounded(item.image?.url),
            },

            {
                header: 'Marca',
                field: 'brand.name',
                width: '150px',
                formatter: (item: any) =>
                    getChip(item.brand.name, true, item.brand?.image?.url),
            },
            {
                header: 'Modelo',
                field: 'model',
                width: '150px',
                sortable: true,
            },
            {
                header: 'Conductor',
                field: 'driver.name',
                width: '175px',
                formatter: (item: any) => getChipDriverWithImage(item.driver),
            },
            {
                header: 'Año',
                field: 'year',
                sortable: true,
            },
            {
                header: 'Combustible',
                field: 'fuel',
                sortable: true,
                formatter: (item: any) => getChip(item.fuel, false, '', 'info'),
            },
            {
                header: 'Traccion',
                field: 'traction',
                sortable: true,
                formatter: (item: any) =>
                    getChip(item.traction, false, '', 'dark'),
            },
            {
                header: 'CC',
                field: 'cc',
                sortable: true,
            },
            {
                header: 'CV',
                field: 'cv',
                sortable: true,
            },
            {
                header: 'Inscrip.',
                field: 'inscriptions.count',
                sortable: true,
                type: 'number',
            },
            {
                header: 'Likes.',
                field: 'likes.count',
                sortable: true,
                type: 'number',
            },
            {
                header: 'Votos.',
                field: 'votes.count',
                sortable: true,
                type: 'number',
            },
            this.defaults.updated,
            this.defaults.created,
        ],
        carsDashboard: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (item: any) => getImageRounded(item.image?.url),
            },
            {
                header: 'Marca',
                field: 'brand.name',
                width: '200px',
                formatter: (item: any) =>
                    getChip(item.brand.name, true, item.brand?.image?.url),
            },
            {
                header: 'Modelo',
                field: 'model',
                width: '150px',
                sortable: true,
            },
            {
                header: 'Conductor',
                field: 'driver.name',
                width: '175px',
                formatter: (item: any) => getChipDriverWithImage(item.driver),
            },
            {
                header: 'Inscrip.',
                field: 'inscriptions.count',
                sortable: true,
                type: 'number',
            },
            {
                header: 'Likes.',
                field: 'likes.count',
                sortable: true,
                type: 'number',
            },
            {
                header: 'Votos.',
                field: 'votes.count',
                sortable: true,
                type: 'number',
            },
        ],
        images: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (item: any) => getImageRounded(item.url),
            },
            {
                header: 'Titulo',
                field: 'updated',
                formatter: (item: any) => {
                    let data;
                    if (item.type === 'brand') {
                        data = `${item.brand.name}`;
                    } else if (item.type === 'car') {
                        data = `${item.car.brand.name} ${item.car.model}`;
                    } else if (item.type === 'tournament') {
                        data = `${item.tournament.name}`;
                    }
                    return data;
                },
            },
            {
                header: 'Tipo',
                field: 'type',
                sortable: true,
                formatter: (item: any) => {
                    let data;
                    if (item.type === 'brand') {
                        data = getChip('Marca', false, '', 'warning');
                    } else if (item.type === 'car') {
                        data = getChip('Coche', false, '', 'info');
                    } else if (item.type === 'tournament') {
                        data = getChip('Coche', false, '', 'success');
                    }
                    return data;
                },
            },
            this.defaults.created,
        ],
        inscriptions: [
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.image?.url
                    ),
            },
            { header: 'Likes', field: 'car.likes.count' },
            { header: 'Usuario', field: 'driver.name' },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            this.defaults.created,
        ],
        inscriptionsCar: [
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            {
                header: 'Torneo',
                field: 'tournament.status',
                width: '200px',
                formatter: (item: any) => getStateChip(item.tournament?.status),
            },
            this.defaults.created,
        ],
        logs: [
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
            },
            {
                header: 'Metodo',
                field: 'method',
                sortable: true,
                type: 'tag',
                tag: {
                    GET: { text: 'GET', color: 'red-100' },
                    POST: { text: 'POST', color: 'green-100' },
                    PATCH: { text: 'PATCH', color: 'blue-100' },
                    PUT: { text: 'PUT', color: 'orange-100' },
                    DELETE: { text: 'DELETE', color: 'blue-100' },
                },
            },
            {
                header: 'Rol',
                field: 'role',
                sortable: true,
                type: 'tag',
                tag: {
                    ADMIN: { text: 'Admin', color: 'green-200' },
                    USER: { text: 'Usuario', color: 'orange-200' },
                    NO_ROLE: { text: 'Sin rol', color: 'red-400' },
                },
            },
            {
                header: 'Total',
                field: 'count',
                sortable: true,
            },
        ],
        likes: [
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.image?.url
                    ),
            },
            {
                header: 'Usuario',
                field: 'user',
                formatter: (item: any) => item.user?.name ?? 'Anonimo',
            },
            this.defaults.created,
        ],
        likesUser: [
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.image?.url
                    ),
            },
            this.defaults.created,
        ],
        notifications: [
            { header: 'Titulo', field: 'title' },
            { header: 'Link', field: 'link' },
            {
                header: 'Alcance',
                field: 'fcms',
                formatter: (item: any) => item.fcms.length,
            },
            { header: 'Visto', field: 'opened', type: 'number' },
            this.defaults.created,
        ],
        pairings: [
            {
                header: 'Coche 1',
                field: 'car1',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car1.brand?.name + ' ' + item.car1.model,
                        true,
                        item.car1.image?.url
                    ),
            },
            { header: 'Votos', field: 'votes.count' },
            {
                header: 'Coche 2',
                field: 'car2',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car2.brand?.name + ' ' + item.car2.model,
                        true,
                        item.car2.image?.url
                    ),
            },
            {
                header: 'Ganador',
                field: 'winner',
                width: '220px',
                formatter: (item: any) =>
                    item.winner
                        ? getChip(
                              item.car2.brand?.name + ' ' + item.car2.model,
                              true,
                              item.car2.image?.url,
                              'gold'
                          )
                        : '--',
            },
            { header: 'Ronda', field: 'round.name', width: '120px' },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            this.defaults.created,
        ],
        pairingsTournament: [
            {
                header: 'Coche 1',
                field: 'car1',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car1.brand?.name + ' ' + item.car1.model,
                        true,
                        item.car1.image?.url
                    ),
            },
            { header: 'Votos', field: 'votes.length' },
            {
                header: 'Coche 2',
                field: 'car2',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car2.brand?.name + ' ' + item.car2.model,
                        true,
                        item.car2.image?.url
                    ),
            },
            {
                header: 'Ganador',
                field: 'winner',
                width: '220px',
                formatter: (item: any) =>
                    item.winner
                        ? getChip(
                              item.car2.brand?.name + ' ' + item.car2.model,
                              true,
                              item.car2.image?.url,
                              'gold'
                          )
                        : '--',
            },
            { header: 'Ronda', field: 'round.name', width: '120px' },
            this.defaults.created,
        ],
        reports: [
            {
                header: 'Reportador',
                field: 'userReporter.name',
                width: '175px',
                formatter: (item: any) =>
                    getChipDriverWithImage(item.userReporter),
            },
            {
                header: 'Coche Reportado',
                field: 'carReported',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        item.carReported.brand.name,
                        true,
                        item.carReported?.image?.url
                    ),
            },
            {
                header: 'Reportado',
                field: 'userReported.name',
                width: '175px',
                formatter: (item: any) =>
                    getChipDriverWithImage(item.userReported),
            },
            {
                header: 'Estado',
                field: 'state',
                type: 'tag',
                formatter: (item: any) => {
                    return item.state ? 'Aceptado' : 'Rechazado';
                },
            },
            this.defaults.updated,
            this.defaults.created,
        ],
        rounds: [
            { header: 'Nombre', field: 'name' },
            { header: 'Participantes', field: 'participants' },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url
                    ),
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.startDate),
            },

            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.endDate),
            },
            {
                header: 'Estado',
                field: 'status',
                formatter: (item: any) => getStateChip(item.status),
            },
            this.defaults.created,
        ],
        statsEvents: [
            {
                header: 'Evento',
                field: 'name',
            },
            {
                header: 'Total',
                field: 'value',
            },
        ],
        toggles: [
            {
                header: 'Nombre',
                field: 'name',
            },
            {
                header: 'Estado',
                field: 'state',
                formatter: (item: any) =>
                    item.state
                        ? getChip('Activo', false, '', 'success')
                        : getChip('Inactivo', false, '', 'primary'),
            },
            {
                header: 'Descripcion',
                field: 'description',
            },
            this.defaults.updated,
            this.defaults.created,
        ],
        tournaments: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (item: any) => getImageRounded(item.image?.url),
            },
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
                width: '220px',
            },
            {
                header: 'Estado',
                field: 'status',
                sortable: true,
                formatter: (item: any) => getStateChip(item.status),
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.startDate),
            },
            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.endDate),
            },
            {
                header: 'Duracion',
                field: 'durationDays',
                sortable: true,
            },
            {
                header: 'Requisitos',
                field: 'requisites.length',
                sortable: true,
            },
            {
                header: 'Inscritos',
                field: 'inscriptions.count',
                sortable: true,
                formatter: (item: any) =>
                    `${item.inscriptions?.count ?? 0}/${item.maxParticipants}`,
            },
            {
                header: 'Rondas',
                field: 'rounds.count',
                sortable: true,
            },
            {
                header: 'Pairings',
                field: 'pairings.count',
                sortable: true,
            },
            {
                header: 'Votos',
                field: 'votes.count',
                sortable: true,
            },
            this.defaults.updated,
            this.defaults.created,
        ],
        tournamentsDashboard: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (item: any) => getImageRounded(item.image?.url),
            },
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
            },
            {
                header: 'Estado',
                field: 'status',
                sortable: true,
                formatter: (item: any) => getStateChip(item.status),
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.startDate),
            },
            {
                header: 'Inscritos',
                field: 'inscriptions.count',
                sortable: true,
                formatter: (item: any) =>
                    `${item.inscriptions?.count ?? 0}/${item.maxParticipants}`,
            },
        ],
        users: [
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
            },
            {
                header: 'Email',
                field: 'email',
                sortable: true,
                width: '250px',
                formatter: (item: any) =>
                    getChip(item.email, false, '', 'dark'),
            },
            {
                header: 'Pais',
                field: 'country',
                sortable: true,
                // width: '250px',
                formatter: (item: any) =>
                    `<img src="${flags[item.country ?? 'es']}">`,
            },
            {
                header: 'Rol',
                field: 'role',
                sortable: true,
                width: '100px',
                formatter: (item: any) => {
                    let data;
                    if (item.role === 'USER') {
                        data = getChip('Usuario', false, '', 'success');
                    } else if (item.role === 'ADMIN') {
                        data = getChip('Admin', false, '', 'primary');
                    } else if (item.role === 'FAKE') {
                        data = getChip('Fake', false, '', 'warning');
                    }
                    return data;
                },
            },
            {
                header: 'Coches',
                field: 'cars.count',
            },
            {
                header: 'Likes',
                field: 'likes.count',
            },
            {
                header: 'Votos',
                field: 'votes.count',
            },
            {
                header: 'Inscrip.',
                field: 'inscriptions.count',
            },
            {
                header: 'FCM',
                field: 'fcm',
                sortable: true,
                formatter: (item: any) => {
                    return item.fcm && item.fcm.length > 0 ? 'Si' : 'No';
                },
            },
            {
                header: 'Google',
                field: 'googleId',
                formatter: (item: any) =>
                    item.googleId && item.googleId !== '' ? 'Si' : 'No',
            },

            this.defaults.updated,
            this.defaults.created,
        ],
        usersDashboard: [
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
            },
            {
                header: 'Email',
                field: 'email',
                sortable: true,
                width: '250px',
                formatter: (item: any) =>
                    getChip(item.email, false, '', 'dark'),
            },
            {
                header: 'Coches',
                field: 'cars.count',
            },
            {
                header: 'Likes',
                field: 'likes.count',
            },
            {
                header: 'Votos',
                field: 'votes.count',
            },
            {
                header: 'Inscrip.',
                field: 'inscriptions.count',
            },
            {
                header: 'FCM',
                field: 'fcm',
                sortable: true,
                formatter: (item: any) => {
                    return item.fcm && item.fcm.length > 0 ? 'Si' : 'No';
                },
            },
        ],
        votes: [
            {
                header: 'Torneo',
                field: 'pairing.round.tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            { header: 'Ronda', field: 'pairing.round.name' },
            this.defaults.created,
        ],
        winners: [
            {
                header: 'Oro',
                field: 'gold',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        `${item.gold?.brand.name} ${item.gold?.model}`,
                        true,
                        item.gold?.image?.url,
                        'gold'
                    ),
            },
            {
                header: 'Plata',
                field: 'silver',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        `${item.silver?.brand.name} ${item.silver?.model}`,
                        true,
                        item.silver?.image?.url,
                        'silver'
                    ),
            },
            {
                header: 'Bronze',
                field: 'bronze',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        `${item.bronze?.brand.name} ${item.bronze?.model}`,
                        true,
                        item.bronze?.image?.url,
                        'bronze'
                    ),
            },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            this.defaults.created,
        ],
    };

    getColumns(type: string): MtxGridColumn[] {
        return this.data[type];
    }
}
