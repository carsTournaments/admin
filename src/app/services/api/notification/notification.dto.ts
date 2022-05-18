export interface NotificationCreateDto {
    users: string[];
    fcms: string[];
    title: string;
    message: string;
    data?: any;
}
