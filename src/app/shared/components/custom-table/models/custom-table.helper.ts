import { environment } from '@env/environment';
import * as moment from 'moment';

export const getChip = (
    text: string,
    imageState = false,
    image = null,
    color = 'primary'
): string => {
    if (text) {
        let data;
        if (imageState) {
            data = `
                <div class="chip chip-${color}">
                    <img class="image-table text-truncate"
                    src="${getImageOrDefault(image!)}" />
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

export const getStateChip = (state: string): string => {
    if (state === 'InProgress') {
        return getChip('En curso', false, null, 'warning');
    } else if (state === 'Completed') {
        return getChip('Completado', false, null, 'success');
    } else if (state === 'Todo') {
        return getChip('Proximamente', false, null, 'info');
    } else if (state === 'Cancelled') {
        return getChip('Cancelado', false, null, 'primary');
        return '';
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
