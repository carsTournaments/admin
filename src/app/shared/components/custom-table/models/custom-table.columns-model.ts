import { MtxGridColumn } from '@ng-matero/extensions/grid';
import { flags } from 'assets/json/flags';
import * as moment from 'moment';
import {
    getChip,
    getChipDriverWithImage,
    getCountVotesOfInscriptions,
    getDateTimeago,
    getImageRounded,
    getImagesByType,
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
        image: {
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
        year: {
            header: 'Año',
            field: 'year',
            sortable: true,
        },
        brand: {
            header: 'Marca',
            field: 'brand.name',
            width: '150px',
            formatter: (item: any) =>
                getChip(item.brand.name, true, item.brand?.image?.url),
        },
        model: {
            header: 'Modelo',
            field: 'model',
            width: '150px',
            sortable: true,
        },
        user: {
            header: 'Usuario',
            field: 'driver.name',
            sortable: true,
            formatter: (item: any) => getChipDriverWithImage(item.driver),
        },
        fuel: {
            header: 'Combustible',
            field: 'fuel',
            sortable: true,
            formatter: (item: any) => getChip(item.fuel, false, '', 'info'),
        },
        traction: {
            header: 'Traccion',
            field: 'traction',
            sortable: true,
            formatter: (item: any) => getChip(item.traction, false, '', 'dark'),
        },
        cc: {
            header: 'CC',
            field: 'cc',
            sortable: true,
        },
        cv: {
            header: 'CV',
            field: 'cv',
            sortable: true,
        },
        rounds: {
            header: 'Rondas',
            field: 'rounds.count',
            sortable: true,
        },
        name: {
            header: 'Nombre',
            field: 'name',
            sortable: true,
        },
        startDate: {
            header: 'Fecha Inicio',
            field: 'startDate',
            sortable: true,
            formatter: (item: any) => getDateTimeago(item.startDate),
        },
        endDate: {
            header: 'Fecha Fin',
            field: 'endDate',
            sortable: true,
            formatter: (item: any) => getDateTimeago(item.endDate),
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
            this.defaults.name,
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
            this.defaults.image,
            this.defaults.brand,
            this.defaults.model,
            {
                header: 'Conductor',
                field: 'driver.name',
                width: '175px',
                formatter: (item: any) =>
                    item.driver ? getChipDriverWithImage(item.driver) : '',
            },
            this.defaults.year,
            this.defaults.fuel,
            this.defaults.traction,
            this.defaults.cc,
            this.defaults.cv,
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
            this.defaults.image,
            this.defaults.brand,
            this.defaults.model,
            this.defaults.year,
            this.defaults.fuel,
            this.defaults.traction,
            this.defaults.cc,
            this.defaults.cv,
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
            this.defaults.image,
            this.defaults.brand,
            this.defaults.model,
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
        githubActions: [
            {
                header: '',
                field: 'badge',
                formatter: (row: any) => {
                    return `<img src="${row.badge}">`;
                },
            },
            {
                header: 'Repo',
                field: 'repo',
                formatter: (item: any) => {
                    if (item.repo === 'admin') {
                        return getChip('Admin', false, '', 'success');
                    } else if (item.repo === 'app') {
                        return getChip('App', false, '', 'warning');
                    } else {
                        return getChip('Backend', false, '', 'dark');
                    }
                },
            },
            this.defaults.created,
            this.defaults.updated,
        ],
        githubActionsDashboard: [
            {
                header: 'Action',
                field: 'badge',
                formatter: (row: any) => {
                    return `<img src="${row.badge}">`;
                },
            },
            {
                header: 'Repo',
                field: 'repo',
                formatter: (item: any) => {
                    if (item.repo === 'admin') {
                        return getChip('Admin', false, '', 'success');
                    } else if (item.repo === 'app') {
                        return getChip('App', false, '', 'warning');
                    } else {
                        return getChip('Backend', false, '', 'dark');
                    }
                },
            },
        ],
        githubIssues: [
            {
                header: 'Titulo',
                field: 'title',
            },
            {
                header: 'Tags',
                field: 'labels',
                formatter: (item: any) => {
                    let html = '';
                    item.labels.forEach((item: any) => {
                        if (item.label === 'bug') {
                            html += `${getChip(item, false, '', 'danger')} `;
                        } else if (item.label === 'enhancement') {
                            html += `${getChip(item, false, '', 'success')} `;
                        } else {
                            html += `${getChip(item, false, '', 'dark')} `;
                        }
                    });
                    return html;
                },
            },
            {
                header: 'Comentarios',
                field: 'comments',
            },
            {
                header: 'Asignado',
                field: 'assignee',
            },
            {
                header: 'Usuario',
                field: 'user',
            },
            {
                header: 'Repo',
                field: 'repo',
                formatter: (item: any) => {
                    if (item.repo === 'admin') {
                        return getChip('Admin', false, '', 'success');
                    } else if (item.repo === 'app') {
                        return getChip('App', false, '', 'warning');
                    } else {
                        return getChip('Backend', false, '', 'dark');
                    }
                },
            },
            this.defaults.created,
            this.defaults.updated,
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
            this.defaults.user,
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
                            : '',
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
            this.defaults.user,
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
                        item.tournament && item.tournament.image
                            ? item.tournament.image.url
                            : '',
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
                header: 'Fecha',
                field: 'date',
                sortable: true,
            },
            {
                header: 'Nivel',
                field: 'level',
                sortable: true,
                type: 'tag',
                formatter: (item: any) => {
                    let color = 'primary';
                    switch (item.level) {
                        case 'info':
                            color = 'info';
                            break;
                        case 'http':
                            color = 'success';
                            break;
                        case 'warn':
                            color = 'warning';
                            break;
                        case 'error':
                            color = 'primary';
                            break;
                        default:
                            break;
                    }
                    return getChip(item.level.toUpperCase(), false, '', color);
                },
            },
            {
                header: 'Tipo',
                field: 'type',
                sortable: true,
            },
            {
                header: 'Mensaje',
                field: 'message',
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
            this.defaults.name,
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
                        getImagesByType(item, 'car1')
                    ),
            },
            {
                header: 'Votos',
                field: 'votes.length',
                formatter: (row: any) => `
                  ${
                      row.votes.filter((v: any) => v.car === row.car1._id)
                          .length
                  } -
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
                        getImagesByType(item, 'car2')
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
                              getImagesByType(item, 'winner'),
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
                        item.tournament && item.tournament.image
                            ? item.tournament.image.url
                            : '',
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
                        getImagesByType(item, 'car1')
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
                        getImagesByType(item, 'car2')
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
                              getImagesByType(item, 'winner'),
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
            this.defaults.name,
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
            this.defaults.startDate,

            this.defaults.endDate,
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
            this.defaults.name,
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
            this.defaults.name,
            {
                header: 'Estado',
                field: 'status',
                sortable: true,
                formatter: (item: any) => getStateChip(item.status),
            },
            this.defaults.startDate,
            this.defaults.endDate,
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
            this.defaults.rounds,
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
            this.defaults.name,
            {
                header: 'Estado',
                field: 'status',
                sortable: true,
                formatter: (item: any) => getStateChip(item.status),
            },
            this.defaults.startDate,
            this.defaults.endDate,
            {
                header: 'Inscritos',
                field: 'inscriptions.count',
                sortable: true,
                formatter: (item: any) =>
                    `${item.inscriptions?.count ?? 0}/${item.maxParticipants}`,
            },
            this.defaults.rounds,
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
            this.defaults.name,
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
            this.defaults.name,
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
                        getImagesByType(item, 'car')
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
                        getImagesByType(item, 'gold'),
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
                        getImagesByType(item, 'silver'),
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
                        getImagesByType(item, 'bronze'),
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
                        item.tournament && item.tournament.image
                            ? item.tournament.image.url
                            : '',
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
                        getImagesByType(item, 'gold'),
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
                        getImagesByType(item, 'silver'),
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
                        getImagesByType(item, 'bronze'),
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
                        item.tournament && item.tournament.image
                            ? item.tournament.image.url
                            : '',
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
