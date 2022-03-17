
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
                }
            ],
        },
        {
            name: 'Coches',
            icon: 'fa-th-list',
            subitems: [
                {
                    name: 'Listado',
                    link: '/cars',
                },
                {
                    name: 'Marcas',
                    link: '/categories/add/site',
                },
            ],
        },
        {
            name: 'Torneos',
            icon: 'fa-th-list',
            subitems: [
                {
                    name: 'Listado',
                    link: '/categories/list/all',
                },
                {
                    name: 'Inscripciones',
                    link: '/categories/add/site',
                },
                {
                    name: 'Rondas',
                    link: '/categories/add/site',
                }
            ],
        },
        {
            name: 'Usuarios',
            icon: 'fa-users',
            subitems: [
                {
                    name: 'Listado',
                    link: '/users',
                },
                {
                    name: 'Nuevo',
                    link: '/users/one',
                }
            ],
        },
        {
            name: 'Votos',
            icon: 'fa-star',
            subitems: [
                {
                    name: 'Listado',
                    link: '/votings',
                },
                {
                    name: 'Nuevo',
                    link: '/votings/one',

                }
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
            ]
        }
    ]
}