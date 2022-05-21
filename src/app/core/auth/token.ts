import { base64 } from './helpers';

// export abstract class BaseToken {
//     constructor(protected _token: string) {}

//     get token(): string {
//         return this._token;
//     }

//     valid(): boolean {
//         return this.hasAccessToken();
//     }

//     getToken(): string {
//         return this.token;
//     }

//     private hasAccessToken(): boolean {
//         return !!this.token;
//     }
// }

// export class SimpleToken extends BaseToken {}

// export class JwtToken extends SimpleToken {
//     private _payload?: { exp?: number | void };

//     static is(accessToken: string): boolean {
//         try {
//             const [_header] = accessToken.split('.');
//             const header = JSON.parse(base64.decode(_header));

//             return header.typ.toUpperCase().includes('JWT');
//         } catch (e) {
//             return false;
//         }
//     }
// }
