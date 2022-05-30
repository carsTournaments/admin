import { flags } from 'assets/json/flags';
import { environment } from '@env/environment';
import * as moment from 'moment';
import { User } from '@models';

export const getChip = (
    text: string,
    imageState = false,
    image = '',
    color = 'primary'
): string => {
    if (text) {
        let data;
        if (imageState) {
            data = `
                <div class="chip chip-${color}">
                    <img class="image-table text-truncate"
                    src="${getImageOrDefault(image)}" />
                    ${text}
                </div>
            `;
        } else {
            data = `<div class="chip chip-${color}">${text}</div>`;
        }
        return data;
    } else {
        return '';
    }
};

export const getChipDriverWithImage = (driver: User, color = 'dark') => {
    return `
    <div class="chip chip-driver-${color}" [routerOutlet]="['/users/one', ${
        driver._id
    }]">
        <img src="${getFlag(driver.country ?? 'es')}">
        ${driver.name}
    </div>
    `;
};

export const getStateChip = (state: string): string => {
    if (state === 'InProgress') {
        return getChip('En curso', false, '', 'warning');
    } else if (state === 'Completed') {
        return getChip('Completado', false, '', 'success');
    } else if (state === 'Todo') {
        return getChip('Proximamente', false, '', 'info');
    } else if (state === 'Cancelled') {
        return getChip('Cancelado', false, '', 'primary');
    } else {
        return '';
    }
};

export const getImageRounded = (image: string) => {
    const url = getImageOrDefault(image);
    return `<img class="image-table" src="${url}" />`;
};

export const getImageOrDefault = (image: string) => {
    return image
        ? `${environment.urlImages}/${image}`
        : 'assets/images/no-image.png';
};

export const getDateTimeago = (date: string) => {
    if (date) {
        const data = moment(date).locale('es').fromNow(false);
        return data.charAt(0).toUpperCase() + data.slice(1);
    } else {
        return '';
    }
};

export const getFlag = (idCountry: string) => {
    return flags[idCountry];
};
