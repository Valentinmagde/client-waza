import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentProfileComponent } from "./student-profile.component";
import { studentProfileRoutes } from "./student-profile.routing";

@NgModule({
    declarations: [
        StudentProfileComponent
    ],
    imports: [
        RouterModule.forChild(studentProfileRoutes),
        SharedModule
    ]
})

export class StudentProfileModule {

}
