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
                formatter: (item: any) => this.getImageRounded(item.image?.url),
            },
            { header: 'Nombre', field: 'name' },
            {
                header: 'Pais',
                field: 'country',
                formatter: (item: any) =>
                    this.getChip(item.country, false, null, 'dark'),
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
                formatter: (item: any) => this.getImageRounded(item.image?.url),
            },
            {
                header: 'Conductor',
                field: 'driver.name',
                width: '175px',
                formatter: (item: any) =>
                    this.getChip(item.driver.name, false, null, 'dark'),
            },
            {
                header: 'Marca',
                field: 'brand.name',
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(item.brand.name, true, item.brand?.image?.url),
            },
            {
                header: 'Modelo',
                field: 'model',
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
                formatter: (item: any) => this.getImageRounded(item.url),
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
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
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
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            defaults.created,
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
                    this.getChip(
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
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
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
                    this.getChip(
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
                        ? this.getChip(
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
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            defaults.created,
        ],
        reports: [
            {
                header: 'Reportador',
                field: 'userReporter.name',
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(item.userReporter.name, false, null, 'dark'),
            },
            {
                header: 'Coche Reportado',
                field: 'carReported',
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(
                        item.carReported.brand.name,
                        true,
                        item.carReported?.image?.url
                    ),
            },
            {
                header: 'Reportado',
                field: 'userReported.name',
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(item.userReporter.name, false, null, 'dark'),
            },
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
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '200px',
                formatter: (item: any) =>
                    this.getChip(
                        item.tournament?.name,
                        true,
                        item.tournament.image?.url
                    ),
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
                formatter: (item: any) => this.getImageRounded(item.image?.url),
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
                width: '250px',
                formatter: (item: any) =>
                    this.getChip(item.email, false, null, 'dark'),
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
            {
                header: 'Torneo',
                field: 'pairing.round.tournament.name',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        item.pairing.round?.tournament.name,
                        true,
                        item.pairing.round?.tournament.image?.url,
                        'dark'
                    ),
            },
            { header: 'Ronda', field: 'pairing.round.name' },
            {
                header: 'Coche',
                field: 'car',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        item.car.brand?.name + ' ' + item.car.model,
                        true,
                        item.car.image?.url
                    ),
            },
            defaults.created,
        ],
        winners: [
            {
                header: 'Oro',
                field: 'gold',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        `${item.gold?.brand.name} ${item.gold?.model}`,
                        true,
                        item.gold?.image?.url,
                        'gold'
                    ),
            },
            {
                header: 'Plata',
                field: 'silver',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        `${item.silver?.brand.name} ${item.silver?.model}`,
                        true,
                        item.silver?.image?.url,
                        'silver'
                    ),
            },
            {
                header: 'Bronze',
                field: 'bronze',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        `${item.bronze?.brand.name} ${item.bronze?.model}`,
                        true,
                        item.bronze?.image?.url,
                        'bronze'
                    ),
            },
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '220px',
                formatter: (item: any) =>
                    this.getChip(
                        item.tournament.name,
                        true,
                        item.tournament.image?.url,
                        'dark'
                    ),
            },
            defaults.created,
        ],
    };

    getColumns(type: string): MtxGridColumn[] {
        return this.data[type];
    }

    private getChip(
        text: string,
        imageState = false,
        image = null,
        color = 'primary'
    ) {
        let data;
        if (imageState) {
            console.log(image);
            data = `
                <div class="chip chip-${color}">
                    <img
                        class="image-table text-truncate"
                        src="${this.getImageOrDefault(image!)}"
                    />
                    ${text}
                </div>
            `;
        } else {
            data = `
                <div class="chip chip-${color}">
                    ${text}
                </div>
            `;
        }
        return data;
    }

    private getImageRounded(image: string) {
        const url = this.getImageOrDefault(image);
        return `<img class="image-table" src="${url}" />`;
    }

    private getImageOrDefault(image: string) {
        return image
            ? `${environment.urlImages}/${image}`
            : 'assets/images/no-image.png';
    }
}
