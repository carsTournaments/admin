import { AuthLogInDto } from '@core/auth/auth.dto';

export class LoginViewModel {
    loginBody: AuthLogInDto = {
        email: '',
        password: '',
        site: 'admin',
    };
    email!: string;
    password!: string;
}
