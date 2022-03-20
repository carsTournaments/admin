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
          link: '/brands',
        },
      ],
    },
    {
      name: 'Torneos',
      icon: 'fa-th-list',
      subitems: [
        {
          name: 'Listado',
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
