import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentProfileModule } from '../student-profile/student-profile.module';
import { StudentDashboardComponent } from './student-dashboard.component';
import { studentDashboardRoutes } from './student-dashboard.routing';

const studentDashboardModules = [
    // Profile
    StudentProfileModule,
];

@NgModule({
    declarations: [
        StudentDashboardComponent,
    ],
    imports: [
        RouterModule.forChild(studentDashboardRoutes),
        SharedModule,
        // ...studentDashboardModules,
    ],
    exports     : [
        StudentDashboardComponent,
        // ...studentDashboardModules
    ]
})
export class StudentDashboardModule
{
}