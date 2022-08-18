export interface CarStatsI {
    name: string;
    label: string;
    items: CarStatsItemI[];
}

export interface CarStatsItemI {
    name: string;
    value: number;
}
