import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { flags } from 'assets/json/flags';
import * as moment from 'moment';
import {
    getChip,
    getChipDriverWithImage,
    getCountVotesOfInscriptions,
    getDateTimeago,
    getImageRounded,
    getStateChip,
    getTypeChip,
} from './custom-table.helper';

export class CustomTableColumnsModel {
    defaults = {
        created: {
            header: 'Creado',
            field: 'created',
            sortable: true,
            width: '150px',
            formatter: (item: any) => getDateTimeago(item.created),
        },
        updated: {
            header: 'Actualizado',
            field: 'updated',
            sortable: true,
            width: '150px',
            formatter: (item: any) => getDateTimeago(item.updated),
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
        cache: [
            {
                header: 'Nombre',
                field: 'name',
            },
            {
                header: 'Peso',
                field: 'size',
            },
            {
                header: 'Expiración',
                field: 'expiration',
                formatter: (item: any) => {
                    return moment(item.expiration).format('DD-MM-YY HH:mm');
                },
            },
        ],

        cars: [
            {
                header: '#',
                field: 'images',
                width: '100px',
                formatter: (item: any) =>
                    getImageRounded(
                        item.images && item.images.length > 0
                            ? item.images[0].url
                            : ''
                    ),
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
                formatter: (item: any) =>
                    item.driver ? getChipDriverWithImage(item.driver) : '',
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
        carsUser: [
            {
                header: '#',
                field: 'images',
                width: '100px',
                formatter: (item: any) =>
                    getImageRounded(
                        item.images && item.images.length > 0
                            ? item.images[0].url
                            : ''
                    ),
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
                field: 'images',
                formatter: (item: any) =>
                    getImageRounded(
                        item.images && item.images.length > 0
                            ? item.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Marca',
                field: 'brand.name',
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
            this.defaults.updated,
        ],
        carStats: [
            {
                header: 'Tipo',
                field: 'name',
            },
            {
                header: 'Total',
                field: 'value',
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
                        data = `${item.brand?.name}`;
                    } else if (item.type === 'car') {
                        data = `${item.car.brand?.name} ${item.car.model}`;
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
                        data = getChip('Torneo', false, '', 'success');
                    }
                    return data;
                },
            },
            {
                header: 'Principal',
                field: 'firstImage',
                sortable: true,
                formatter: (item: any) => {
                    if (item.firstImage === undefined) {
                        return '-';
                    } else {
                        return item.firstImage ? 'Si' : 'No';
                    }
                },
            },
            {
                header: 'Posicion',
                field: 'position',
                sortable: true,
                type: 'number',
            },
            {
                header: 'Tamaño',
                field: 'size',
                type: 'string',
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
                        item.car.images && item.car.images.length > 0
                            ? item.car.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Usuario',
                field: 'driver.name',
                sortable: true,
                formatter: (item: any) => getChipDriverWithImage(item.driver),
            },
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
        inscriptionsTournament: [
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.images && item.car.images.length > 0
                            ? item.car.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Votos',
                field: 'car.votes',
                formatter: (row: any) => getCountVotesOfInscriptions(row),
            },
            {
                header: 'Usuario',
                field: 'driver.name',
                sortable: true,
                formatter: (item: any) => getChipDriverWithImage(item.driver),
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
                        item.tournament.image?.url ?? '',
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
                        item.car.images.length > 0 ? item.car.images[0].url : ''
                    ),
            },
            {
                header: 'Usuario',
                field: 'user',
                formatter: (item: any) =>
                    item.user ? getChipDriverWithImage(item.user) : 'Anonimo',
            },
            this.defaults.created,
        ],
        likesCar: [
            {
                header: 'Usuario',
                field: 'user',
                formatter: (item: any) =>
                    item.user ? getChipDriverWithImage(item.user) : 'Anonimo',
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
        literals: [
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
            },
            {
                header: 'Categoria',
                field: 'category',
                sortable: true,
            },
            {
                header: 'Español',
                field: 'es',
                sortable: true,
            },
            {
                header: 'Ingles',
                field: 'en',
                sortable: true,
            },
            this.defaults.updated,
            this.defaults.created,
        ],
        menu: [
            { header: 'Nombre', field: 'name' },
            {
                header: 'Tipo',
                field: 'type',
                formatter: (item: any) => getTypeChip(item.type),
            },
            { header: 'Icono', field: 'icon' },
            { header: 'Posicion', field: 'position' },
            this.defaults.updated,
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
                        item.car1.images && item.car1.images.length > 0
                            ? item.car1.images[0]?.url
                            : ''
                    ),
            },
            {
                header: 'Votos',
                field: 'votes.length',
                formatter: (row: any) => `
            ${row.votes.filter((v: any) => v.car === row.car1._id).length} -
            ${row.votes.filter((v: any) => v.car === row.car2._id).length}
            `,
            },
            {
                header: 'Coche 2',
                field: 'car2',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car2.brand?.name + ' ' + item.car2.model,
                        true,
                        item.car2.images && item.car2.images.length > 0
                            ? item.car2.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Ganador',
                field: 'winner',
                width: '220px',
                formatter: (item: any) =>
                    item.winner
                        ? getChip(
                              item.winner.brand?.name + ' ' + item.winner.model,
                              true,
                              item.winner.images &&
                                  item.winner.images.length > 0
                                  ? item.winner.images[0].url
                                  : '',
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
                        item.car1.images && item.car1.images.length > 0
                            ? item.car1.images[0]?.url
                            : ''
                    ),
            },
            {
                header: 'Votos',
                field: 'votes.length',
                formatter: (row: any) => `
                    ${
                        row.votes.filter((v: any) => v.car === row.car1._id)
                            .length
                    } - ${
                    row.votes.filter((v: any) => v.car === row.car2._id).length
                }`,
            },
            {
                header: 'Coche 2',
                field: 'car2',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car2.brand?.name + ' ' + item.car2.model,
                        true,
                        item.car2.images && item.car2.images.length > 0
                            ? item.car2.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Ganador',
                field: 'winner',
                width: '220px',
                formatter: (item: any) =>
                    item.winner
                        ? getChip(
                              item.winner.brand?.name + ' ' + item.winner.model,
                              true,
                              item.winner.images &&
                                  item.winner.images.length > 0
                                  ? item.winner.images[0].url
                                  : '',
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
            { header: 'Nombre', field: 'name', sortable: true },
            { header: 'Participantes', field: 'participants', sortable: true },
            { header: 'Votos', field: 'votes.count' },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    getChip(
                        item.tournament?.name,
                        true,
                        item.tournament && item.tournament.image
                            ? item.tournament.image.url
                            : ''
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
                sortable: true,
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
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (item: any) => getDateTimeago(item.endDate),
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
        ],
        users: [
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
                width: '180px',
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
                formatter: (item: any) =>
                    `<img src="${flags[item.country ?? 'es']}">`,
            },
            {
                header: 'Rol',
                field: 'role',
                sortable: true,
                width: '100px',
                formatter: (item: any) => {
                    if (item.role === 'USER') {
                        if (item.cars?.count > 0) {
                            return getChip('Piloto', false, '', 'success');
                        } else {
                            return getChip('Aficionado', false, '', 'dark');
                        }
                    } else if (item.role === 'ADMIN') {
                        return getChip('Admin', false, '', 'primary');
                    } else {
                        return getChip('Fake', false, '', 'warning');
                    }
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
                width: '180px',
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
                formatter: (item: any) =>
                    `<img src="${flags[item.country ?? 'es']}">`,
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
            this.defaults.updated,
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
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.images && item.car.images.length > 0
                            ? item.car.images[0].url
                            : ''
                    ),
            },
            {
                header: 'Votante',
                field: 'user.name',
                sortable: true,
                formatter: (item: any) =>
                    item.user ? getChipDriverWithImage(item.user) : item.uuid,
            },
            { header: 'Ronda', field: 'round.name' },
            this.defaults.created,
        ],
        votesCar: [
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
            {
                header: 'Votante',
                field: 'user.name',
                sortable: true,
                formatter: (item: any) =>
                    item.user ? getChipDriverWithImage(item.user) : item.uuid,
            },
            { header: 'Ronda', field: 'round.name' },
            this.defaults.created,
        ],
        votesTournament: [
            {
                header: 'Coche',
                field: 'car',
                formatter: (item: any) =>
                    getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.image?.url
                    ),
            },
            {
                header: 'Votante',
                field: 'user.name',
                sortable: true,
                formatter: (item: any) =>
                    item.user ? getChipDriverWithImage(item.user) : item.uuid,
            },
            { header: 'Ronda', field: 'round.name' },
            this.defaults.created,
        ],
        winners: [
            {
                header: 'Oro',
                field: 'gold',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.gold?.brand.name} ${item.gold?.model}`,
                        true,
                        item.gold.images && item.gold.images.length > 0
                            ? item.gold.images[0].url
                            : '',
                        'gold'
                    ),
            },
            {
                header: 'Plata',
                field: 'silver',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.silver?.brand.name} ${item.silver?.model}`,
                        true,
                        item.silver.images && item.silver.images.length > 0
                            ? item.silver?.images[0].url
                            : '',
                        'silver'
                    ),
            },
            {
                header: 'Bronze',
                field: 'bronze',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.bronze?.brand.name} ${item.bronze?.model}`,
                        true,
                        item.bronze.images && item.bronze.images.length > 0
                            ? item.bronze.images[0].url
                            : '',
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
        winnersCar: [
            {
                header: 'Oro',
                field: 'gold',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.gold?.brand.name} ${item.gold?.model}`,
                        true,
                        item.gold.images && item.gold.images.length > 0
                            ? item.gold.images[0].url
                            : '',
                        'gold'
                    ),
            },
            {
                header: 'Votos',
                field: 'gold.votes',
                width: '100px',
                formatter: (item: any) =>
                    `${item.gold.votes}/${item.silver.votes}/${item.bronze.votes}`,
            },
            {
                header: 'Plata',
                field: 'silver',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.silver?.brand.name} ${item.silver?.model}`,
                        true,
                        item.silver.images && item.silver.images.length > 0
                            ? item.silver?.images[0].url
                            : '',
                        'silver'
                    ),
            },
            {
                header: 'Bronze',
                field: 'bronze',
                width: '200px',
                formatter: (item: any) =>
                    getChip(
                        `${item.bronze?.brand.name} ${item.bronze?.model}`,
                        true,
                        item.bronze.images && item.bronze.images.length > 0
                            ? item.bronze.images[0].url
                            : '',
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
