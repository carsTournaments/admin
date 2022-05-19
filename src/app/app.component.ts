import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild('sidenav') sidenav: any;
    title = 'carsTournaments-admin';
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
    ];
    constructor(private router: Router) {}

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    onClickItem(item: any) {
        if (item.subitems) {
            this.closeAllWithSubItems(item);
            item.state = !item.state;
        } else {
            this.router.navigate([item.link]);
            this.sidenav.close();
        }
    }

    onClickSubItem(link: string) {
        this.router.navigate([link]);
        this.sidenav.close();
    }

    closeAllWithSubItems(item: any) {
        this.items.forEach((i) => {
            if (i.subitems && item !== i) {
                i.state = false;
            }
        });
    }
}
