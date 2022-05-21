export class AppViewModel {
    siteName = 'CarsTournaments';
    path!: string;
    items: any[] = [
        {
            name: 'Dashboard',
            icon: 'fa-home',
            link: '/dashboard',
        },
        {
            name: 'Coches',
            icon: 'fa-th-list',
            state: false,
            subitems: [
                {
                    name: 'Coches',
                    link: '/cars',
                },
                {
                    name: 'Marcas',
                    link: '/brands',
                },
                {
                    name: 'Likes',
                    link: '/likes',
                },
                {
                    name: 'Reportes',
                    link: '/reports',
                },
            ],
        },
        {
            name: 'Torneos',
            icon: 'fa-th-list',
            state: false,
            subitems: [
                {
                    name: 'Torneos',
                    link: '/tournaments',
                },
                {
                    name: 'Inscripciones',
                    link: '/inscriptions',
                },
                {
                    name: 'Rondas',
                    link: '/rounds',
                },
                {
                    name: 'Emparejamientos',
                    link: '/pairings',
                },
                {
                    name: 'Votos',
                    link: '/votes',
                },
                {
                    name: 'Ganadores',
                    link: '/winners',
                },
            ],
        },
        {
            name: 'Imagenes',
            icon: 'fa-photo',
            link: '/images',
        },
        {
            name: 'Usuarios',
            icon: 'fa-users',
            link: '/users',
        },
        {
            name: 'Configuración',
            icon: 'fa-cog',
            link: '/settings',
        },
        {
            name: 'Logs',
            icon: '',
            link: '/logs',
        },
        {
            name: 'Notificaciones',
            icon: '',
            link: '/notifications',
        },
    ];
}
