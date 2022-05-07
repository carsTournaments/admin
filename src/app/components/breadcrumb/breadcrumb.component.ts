import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, Event } from '@angular/router';
import { filter, distinctUntilChanged } from 'rxjs/operators';
import { BreadcrumbI } from './breadcrumb.interface';

@Component({
    selector: 'breadcrumb',
    templateUrl: 'breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
    public breadcrumbs: BreadcrumbI[];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
    }

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter((event: Event) => event instanceof NavigationEnd),
                distinctUntilChanged()
            )
            .subscribe(() => {
                this.breadcrumbs = this.buildBreadCrumb(
                    this.activatedRoute.root
                );
            });
    }

    buildBreadCrumb(
        route: ActivatedRoute,
        url = '',
        breadcrumbs: BreadcrumbI[] = []
    ): BreadcrumbI[] {
        let label =
            route.routeConfig && route.routeConfig.data
                ? route.routeConfig.data['breadcrumb']
                : '';
        let path: string | undefined =
            route.routeConfig && route.routeConfig.data
                ? route.routeConfig.path
                : '';
        const lastRoutePart: string | undefined = path!.split('/').pop();
        const isDynamicRoute = lastRoutePart!.startsWith(':');
        if (isDynamicRoute && !!route.snapshot) {
            const paramName = lastRoutePart!.split(':')[1];
            path = path!.replace(
                lastRoutePart!,
                route.snapshot.params[paramName]
            );
            label = route.snapshot.data['breadcrumb'];
        }

        const nextUrl = path ? `${url}/${path}` : url;

        const breadcrumb: BreadcrumbI = {
            label,
            url: nextUrl,
        };
        const newBreadcrumbs = breadcrumb.label
            ? [...breadcrumbs, breadcrumb]
            : [...breadcrumbs];
        if (route.firstChild) {
            return this.buildBreadCrumb(
                route.firstChild,
                nextUrl,
                newBreadcrumbs
            );
        }
        return newBreadcrumbs;
    }
}
