import { APP_INITIALIZER } from '@angular/core';

// import { SanctumService } from './bootstrap/sanctum.service';
// export function SanctumServiceFactory(sanctumService: SanctumService) {
//   return () => sanctumService.load();
// }

import { StartupService } from './bootstrap/startup.service';
export function StartupServiceFactory(startupService: StartupService) {
    return () => startupService.load();
}

export const appInitializerProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [StartupService],
        multi: true,
    },
];
