import { AuthLogInDto } from 'src/app/services/auth/auth.dto';

export class LoginViewModel {
    loginBody: AuthLogInDto = {
        email: '',
        password: '',
        site: 'admin',
    };
    email!: string;
    password!: string;
}
