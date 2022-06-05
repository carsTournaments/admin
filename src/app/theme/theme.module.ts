import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserPanelComponent } from './sidebar/user-panel.component';
import { AccordionDirective } from './sidemenu/accordion.directive';
import { AccordionAnchorDirective } from './sidemenu/accordionanchor.directive';
import { AccordionItemDirective } from './sidemenu/accordionItem.directive';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BrandingComponent } from './widgets/branding.component';
import { UserComponent } from './widgets/user.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        BrandingComponent,
        HeaderComponent,
        UserPanelComponent,
        AccordionDirective,
        AccordionItemDirective,
        AccordionAnchorDirective,
        SidebarComponent,
        SidemenuComponent,
        UserComponent,
    ],
    imports: [SharedModule],
})
export class ThemeModule {}
