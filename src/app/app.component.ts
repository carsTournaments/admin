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
            state: false,
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
            state: false,
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
            state: false,
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
            state: false,
            subitems: [
                {
                    name: 'Configuración',
                    link: '/settings',
                },
            ],
        },
    ];
    constructor(private router: Router) {}

    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    onClickItem(link: string) {
        this.router.navigate([link]);
        this.sidenav.close();
    }
}
