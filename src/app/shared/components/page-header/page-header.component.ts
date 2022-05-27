import { Component, ViewEncapsulation, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector: 'page-header',
    host: {
        class: 'matero-page-header',
    },
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent {
    @Input() title = '';
    @Input() subtitle = '';
    @Input() nav: string[] = [];
    @Input()
    get hideBreadcrumb() {
        return this._hideBreadCrumb;
    }
    set hideBreadcrumb(value: boolean) {
        this._hideBreadCrumb = coerceBooleanProperty(value);
    }
    private _hideBreadCrumb = false;
}
