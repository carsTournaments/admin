import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { LocalStorageService } from '@services/various/storage.service';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    private key = 'XSToken';

    private change$ = new BehaviorSubject<string | undefined>(undefined);

    private _token?: string;

    constructor(private store: LocalStorageService) {}

    private get token(): string | undefined {
        if (!this._token) {
            this._token = this.store.get(this.key)!;
            return this._token;
        } else {
            return undefined;
        }
    }

    change(): Observable<string | undefined> {
        return this.change$.pipe(share());
    }

    set(token?: string): TokenService {
        console.log('set token', token);
        this.save(token);

        return this;
    }

    clear(): void {
        this.save();
    }

    valid(): boolean {
        console.log({
            valid: this.token,
        });
        return this.token && this.token?.length > 0 ? true : false;
    }

    getToken(): string {
        return this.token ?? '';
    }

    private save(token?: string): void {
        this._token = undefined;

        if (!token) {
            this.store.remove(this.key);
        } else {
            this.store.set(this.key, token);
        }

        this.change$.next(token);
    }
}
