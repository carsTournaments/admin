import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { HeaderUserComponent } from '../shared/components';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrandingComponent } from './widgets/branding.component';
import { UserComponent } from './widgets/user.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        BrandingComponent,
        HeaderComponent,
        UserPanelComponent,
        HeaderUserComponent,
        SidebarComponent,
        SidemenuComponent,
        UserComponent,
    ],
    imports: [SharedModule, MaterialModule],
})
export class ThemeModule {}
