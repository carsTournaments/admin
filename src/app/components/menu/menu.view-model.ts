export class MenuViewModel {
    items: any[] = [
        {
            name: 'Dashboard',
            icon: 'fa-home',
            subitems: [
                {
                    name: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    name: 'Logs',
                    link: '/logs',
                },
                {
                    name: 'Cerrar sesion',
                    action: 'logout',
                },
            ],
        },
        {
            name: 'Coches',
            icon: 'fa-th-list',
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
            ],
        },
        {
            name: 'Torneos',
            icon: 'fa-th-list',
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
            subitems: [
                {
                    name: 'Imagenes',
                    link: '/images',
                },
            ],
        },
        {
            name: 'Usuarios',
            icon: 'fa-users',
            subitems: [
                {
                    name: 'Usuarios',
                    link: '/users',
                },
                {
                    name: 'Nuevo',
                    link: '/users/one',
                },
            ],
        },
        {
            name: 'Configuración',
            icon: 'fa-cog',
            subitems: [
                {
                    name: 'Configuración',
                    link: '/settings',
                },
            ],
        },
    ];
}
