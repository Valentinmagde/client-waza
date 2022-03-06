import { Route } from '@angular/router';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseDetailsResolver } from './courses-details/courses-details.resolvers';
import { StudentCoursesComponent } from './student-courses.component';

export const studentCourseRoutes: Route[] = [
    {
        path     : '',
        component: StudentCoursesComponent
    },
    {
        path: ':id',
        component: CoursesDetailsComponent,
        resolve: {
            course: CourseDetailsResolver
        }
    },
];
