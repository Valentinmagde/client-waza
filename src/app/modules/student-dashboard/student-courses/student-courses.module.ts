import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { StickyNavModule } from "ng2-sticky-nav";
import { CountUpModule } from "ngx-countup";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgxScrollTopModule } from "ngx-scrolltop";
import { NgxSimpleCountdownModule } from "ngx-simple-countdown";
import { TabsModule } from "ngx-tabset";
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesContentsComponent } from "./courses-contents/courses-contents.component";
import { CoursesDetailsComponent } from "./courses-details/courses-details.component";
import { StudentCoursesComponent } from "./student-courses.component";
import { studentCourseRoutes } from "./student-courses.routing";

@NgModule({
    declarations: [
        StudentCoursesComponent,
        CoursesDetailsComponent,
        CoursesContentsComponent
    ],
    imports: [
        RouterModule.forChild(studentCourseRoutes),
        TabsModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSimpleCountdownModule,
        NgxScrollTopModule,
        StickyNavModule,
        CountUpModule,
        SharedModule
    ]
})

export class StudentCourseModule {

}
