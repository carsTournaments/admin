import { environment } from '@env/environment';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import * as moment from 'moment';

const defaults = {
    created: {
        header: 'Creado',
        field: 'created',
        sortable: true,
        formatter: (rowData: any) => {
            return moment(rowData.created).locale('es').fromNow();
        },
    },
    updated: {
        header: 'Actualizado',
        field: 'updated',
        sortable: true,
        formatter: (rowData: any) => {
            return moment(rowData.updated).locale('es').fromNow();
        },
    },
};

export class CustomTableColumnsModel {
    data: any = {
        brands: [
            {
                header: '#',
                field: 'image.url',
                formatter: (rowData: any) => {
                    if (rowData.image) {
                        return `<img class="image-table" src="${environment.urlImages}/${rowData.image.url}">`;
                    } else {
                        return `<img class="image-table" src="./assets/images/no-image.png">`;
                    }
                },
            },
            { header: 'Nombre', field: 'name' },
            { header: 'Pais', field: 'country' },
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
                formatter: (rowData: any) => {
                    if (rowData.image) {
                        return `<img class="image-table" src="${environment.urlImages}/${rowData.image.url}">`;
                    } else {
                        return `<img class="image-table" src="./assets/images/no-image.png">`;
                    }
                },
            },
            {
                header: 'Marca',
                field: 'brand.name',
            },
            {
                header: 'Modelo',
                field: 'model',
                sortable: true,
            },
            {
                header: 'Conductor',
                field: 'driver.name',
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
                type: 'tag',
                tag: {
                    Hibrido: { text: 'Hibrido', color: 'red-100' },
                    Diesel: { text: 'Diesel', color: 'green-100' },
                    Gasolina: { text: 'Gasolina', color: 'orange-100' },
                },
            },
            {
                header: 'Traccion',
                field: 'traction',
                sortable: true,
                type: 'tag',
                tag: {
                    Trasera: { text: 'Trasera', color: 'red-100' },
                    Delantera: { text: 'Diesel', color: 'green-100' },
                    ['4x4']: { text: '4x4', color: 'orange-100' },
                },
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
            defaults.updated,
            defaults.created,
        ],
        images: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (rowData: any) => {
                    return `<img class="image-table" src="${environment.urlImages}/${rowData.url}">`;
                },
            },
            {
                header: 'Titulo',
                field: 'updated',
                formatter: (rowData: any) => {
                    let data;
                    if (rowData.type === 'brand') {
                        data = `${rowData.brand.name}`;
                    } else if (rowData.type === 'car') {
                        data = `${rowData.car.brand.name} ${rowData.car.model}`;
                    } else if (rowData.type === 'tournament') {
                        data = `${rowData.tournament.name}`;
                    }
                    return data;
                },
            },
            {
                header: 'Tipo',
                field: 'type',
                sortable: true,
                type: 'tag',
                tag: {
                    car: { text: 'Coche', color: 'red-100' },
                    tournament: { text: 'Torneo', color: 'green-100' },
                    brand: { text: 'Marca', color: 'orange-100' },
                },
            },
            defaults.created,
        ],
        inscriptions: [
            {
                header: 'Coche',
                field: 'car',
                formatter: (item: any) =>
                    `${item.car.brand?.name} ${item.car?.model}`,
            },
            { header: 'Likes', field: 'car.likes.count' },
            { header: 'Usuario', field: 'driver.name' },
            { header: 'Torneo', field: 'tournament.name' },
            defaults.created,
        ],
        likes: [
            {
                header: 'Coche',
                field: 'car',
                formatter: (item: any) =>
                    `${item.car.brand.name} ${item.car.model}`,
            },
            {
                header: 'Usuario',
                field: 'user',
                formatter: (item: any) => item.user?.name ?? 'Anonimo',
            },
            defaults.created,
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
            defaults.created,
        ],
        pairings: [
            {
                header: 'Coche 1',
                field: 'car1',
                formatter: (item: any) =>
                    `${item.car1.brand.name} ${item.car1.model}`,
            },
            { header: 'Votos', field: 'votes.count' },
            {
                header: 'Coche 2',
                field: 'car2',
                formatter: (item: any) =>
                    `${item.car2.brand.name} ${item.car2.model}`,
            },
            {
                header: 'Ganador',
                field: 'winner',
                formatter: (item: any) =>
                    item.winner
                        ? `${item.winner.brand.name} ${item.winner.model}`
                        : '--',
            },
            { header: 'Ronda', field: 'round.name' },
            { header: 'Torneo', field: 'tournament.name' },
            defaults.created,
        ],
        reports: [
            { header: 'Reportador', field: 'userReporter.name' },
            {
                header: 'Coche Reportado',
                field: 'carReported',
                formatter: (item: any) =>
                    `${item.carReported.brand.name} ${item.carReported.model}`,
            },
            { header: 'Reportado', field: 'userReported.name' },
            {
                header: 'Estado',
                field: 'state',
                type: 'tag',
                formatter: (item: any) => {
                    return item.state ? 'Aceptado' : 'Rechazado';
                },
            },
            defaults.updated,
            defaults.created,
        ],
        rounds: [
            { header: 'Nombre', field: 'name' },
            { header: 'Participantes', field: 'participants' },
            { header: 'Torneo', field: 'tournament.name' },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (rowData: any) => {
                    return moment(rowData.startDate)
                        .locale('es')
                        .fromNow(false);
                },
            },

            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (rowData: any) => {
                    return moment(rowData.endDate).locale('es').fromNow(false);
                },
            },
            {
                header: 'Estado',
                field: 'status',
                type: 'tag',
                tag: {
                    Todo: { text: 'Proximamente', color: 'yellow-100' },
                    Cancelled: { text: 'Cancelado', color: 'red-300' },
                    InProgress: { text: 'En progreso', color: 'blue-300' },
                    Completed: { text: 'Completado', color: 'green-300' },
                },
            },
            defaults.created,
        ],
        tournaments: [
            {
                header: '#',
                field: 'image.url',
                width: '75px',
                formatter: (rowData: any) => {
                    return `<img class="image-table" src="${environment.urlImages}/${rowData.image.url}">`;
                },
            },
            {
                header: 'Nombre',
                field: 'name',
                sortable: true,
                width: '150px',
            },
            {
                header: 'Estado',
                field: 'status',
                sortable: true,
                type: 'tag',
                tag: {
                    Todo: { text: 'Proximamente', color: 'yellow-100' },
                    Cancelled: { text: 'Cancelado', color: 'red-300' },
                    InProgress: { text: 'En progreso', color: 'blue-300' },
                    Completed: { text: 'Completado', color: 'green-300' },
                },
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (rowData: any) => {
                    return moment(rowData.startDate)
                        .locale('es')
                        .fromNow(false);
                },
            },
            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                type: 'perro',
                formatter: (rowData: any) => {
                    if (rowData.endDate) {
                        return moment(rowData.endDate)
                            .locale('es')
                            .fromNow(false);
                    } else {
                        return '--';
                    }
                },
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
            defaults.updated,
            defaults.created,
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
            },
            {
                header: 'Rol',
                field: 'role',
                sortable: true,
                type: 'tag',
                width: '100px',
                tag: {
                    ADMIN: { text: 'Admin', color: 'red-100' },
                    USER: { text: 'Usuario', color: 'green-100' },
                    FAKE: { text: 'Fake', color: 'orange-100' },
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
            defaults.updated,
            defaults.created,
        ],
        votes: [
            { header: 'Torneo', field: 'pairing.round.tournament.name' },
            { header: 'Ronda', field: 'pairing.round.name' },
            {
                header: 'Coche',
                field: 'car',
                formatter: (item: any) => {
                    return `${item.car.brand.name} ${item.car.model}`;
                },
            },
            defaults.created,
        ],
        winners: [defaults.created],
    };

    getColumns(type: string): MtxGridColumn[] {
        return this.data[type];
    }
}
