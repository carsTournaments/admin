export interface NotificationCreateDto {
    users: string[];
    fcms: string[];
    title: string;
    message: string;
    link?: string;
}
