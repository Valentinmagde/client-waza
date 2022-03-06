import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentDashboardLayoutComponent } from './student-dashboard.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentSidebarComponent } from './student-sidebar/student-sidebar.component';

@NgModule({
    declarations: [
        StudentDashboardLayoutComponent,
        StudentNavbarComponent,
        StudentSidebarComponent
    ],
    imports     : [
        RouterModule,
        SharedModule
    ],
    exports     : [
        StudentDashboardLayoutComponent
    ]
})
export class StudentDashboardLayoutModule
{
}
