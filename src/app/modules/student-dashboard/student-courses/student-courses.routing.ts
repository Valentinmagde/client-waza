import { Route } from '@angular/router';
import { CoursesContentsComponent } from './courses-contents/courses-contents.component';
import { CourseContentsResolver } from './courses-contents/courses-contents.resolvers';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseDetailsResolver } from './courses-details/courses-details.resolvers';
import { StudentCoursesComponent } from './student-courses.component';

export const studentCourseRoutes: Route[] = [
    {
        path     : '',
        component: StudentCoursesComponent
    },
    {
        path: 'details/:id',
        component: CoursesDetailsComponent,
        resolve: {
            course: CourseDetailsResolver
        }
    },
    {
        path: 'details/:id/contents',
        component: CoursesContentsComponent,
        resolve: {
            course: CourseContentsResolver
        }
    },
];
