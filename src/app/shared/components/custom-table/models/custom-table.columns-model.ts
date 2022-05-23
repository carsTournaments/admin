import { environment } from '@env/environment';
import { MtxGridColumn } from '@ng-matero/extensions/grid';
import * as moment from 'moment';

export class CustomTableColumnsModel {
    defaults = {
        created: {
            header: 'Creado',
            field: 'created',
            sortable: true,
            formatter: (item: any) => this.getDateTimeago(item.created!),
        },
        updated: {
            header: 'Actualizado',
            field: 'updated',
            sortable: true,
            formatter: (item: any) => this.getDateTimeago(item.updated!),
        },
    };
    private data: any = {
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
                    this.getChip(item.driver?.name, false, null, 'dark'),
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
                formatter: (item: any) =>
                    this.getChip(item.fuel, false, null, 'info'),
            },
            {
                header: 'Traccion',
                field: 'traction',
                sortable: true,
                formatter: (item: any) =>
                    this.getChip(item.traction, false, null, 'dark'),
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
                formatter: (item: any) => this.getImageRounded(item.url),
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
                type: 'tag',
                tag: {
                    car: { text: 'Coche', color: 'red-100' },
                    tournament: { text: 'Torneo', color: 'green-100' },
                    brand: { text: 'Marca', color: 'orange-100' },
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
            this.defaults.created,
        ],
        inscriptionsCar: [
            {
                header: 'Torneo',
                field: 'tournament.name',
                width: '250px',
                formatter: (item: any) =>
                    this.getChip(
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
                formatter: (item: any) =>
                    this.getStateChip(item.tournament?.status),
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
            this.defaults.created,
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
            this.defaults.updated,
            this.defaults.created,
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
                formatter: (item: any) => this.getDateTimeago(item.startDate),
            },

            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (item: any) => this.getDateTimeago(item.endDate),
            },
            {
                header: 'Estado',
                field: 'status',
                formatter: (item: any) => this.getStateChip(item.status),
            },
            this.defaults.created,
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
                formatter: (item: any) => this.getStateChip(item.status),
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (item: any) => this.getDateTimeago(item.startDate),
            },
            {
                header: 'Fecha Fin',
                field: 'endDate',
                sortable: true,
                formatter: (item: any) => this.getDateTimeago(item.endDate),
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
                formatter: (item: any) => this.getImageRounded(item.image?.url),
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
                formatter: (item: any) => this.getStateChip(item.status),
            },
            {
                header: 'Fecha Inicio',
                field: 'startDate',
                sortable: true,
                formatter: (item: any) => {
                    return moment(item.startDate).locale('es').fromNow(false);
                },
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
                    this.getChip(item.email, false, null, 'dark'),
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
            this.defaults.created,
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
            this.defaults.created,
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
    ): string {
        if (text) {
            let data;
            if (imageState) {
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
        } else {
            return '';
        }
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

    private getStateChip(state: string): string {
        if (state === 'InProgress') {
            return this.getChip('En curso', false, null, 'warning');
        } else if (state === 'Completed') {
            return this.getChip('Completado', false, null, 'success');
        } else if (state === 'Todo') {
            return this.getChip('Proximamente', false, null, 'info');
        } else if (state === 'Cancelled') {
            return this.getChip('Cancelado', false, null, 'primary');
            return '';
        } else {
            return '';
        }
    }

    private getDateTimeago(date: string) {
        if (date) {
            const data = moment(date).locale('es').fromNow(false);
            return data.charAt(0).toUpperCase() + data.slice(1);
        } else {
            return '';
        }
    }
}
