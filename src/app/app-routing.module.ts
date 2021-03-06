import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCoursesComponent } from './modules/admin-dashboard/admin-courses/admin-courses.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminProfileComponent } from './modules/admin-dashboard/admin-profile/admin-profile.component';
import { AdminPurchaseHistoryComponent } from './modules/admin-dashboard/admin-purchase-history/admin-purchase-history.component';
import { AdminSettingsComponent } from './modules/admin-dashboard/admin-settings/admin-settings.component';
import { NotFoundComponent } from './layout/common/not-found/not-found.component';
import { InstructorAddCoursesComponent } from './modules/instructor-dashboard/instructor-add-courses/instructor-add-courses.component';
import { InstructorCoursesComponent } from './modules/instructor-dashboard/instructor-courses/instructor-courses.component';
import { InstructorDashboardComponent } from './modules/instructor-dashboard/instructor-dashboard/instructor-dashboard.component';
import { InstructorEarningsComponent } from './modules/instructor-dashboard/instructor-earnings/instructor-earnings.component';
import { InstructorProfileComponent } from './modules/instructor-dashboard/instructor-profile/instructor-profile.component';
import { InstructorPurchaseHistoryComponent } from './modules/instructor-dashboard/instructor-purchase-history/instructor-purchase-history.component';
import { InstructorSettingsComponent } from './modules/instructor-dashboard/instructor-settings/instructor-settings.component';
import { InstructorStudentsComponent } from './modules/instructor-dashboard/instructor-students/instructor-students.component';
import { InstructorWithdrawComponent } from './modules/instructor-dashboard/instructor-withdraw/instructor-withdraw.component';
import { AboutPageComponent } from './modules/pages/about-page/about-page.component';
import { BecomeAnInstrutorPageComponent } from './modules/pages/become-an-instrutor-page/become-an-instrutor-page.component';
import { BlogDetailsPageComponent } from './modules/pages/blog-details-page/blog-details-page.component';
import { BlogPageComponent } from './modules/pages/blog-page/blog-page.component';
import { ComingSoonPageComponent } from './modules/pages/coming-soon-page/coming-soon-page.component';
import { ContactPageComponent } from './modules/pages/contact-page/contact-page.component';
import { CoursesDetailsPageComponent } from './modules/pages/courses-details-page/courses-details-page.component';
import { CoursesPageComponent } from './modules/pages/courses-page/courses-page.component';
import { EventsDetailsPageComponent } from './modules/pages/events-details-page/events-details-page.component';
import { EventsPageComponent } from './modules/pages/events-page/events-page.component';
import { FaqPageComponent } from './modules/pages/faq-page/faq-page.component';
import { HomeComponent } from './modules/home/home.component';
import { HomeDemoThreeComponent } from './modules/pages/home-demo-three/home-demo-three.component';
import { HomeDemoTwoComponent } from './modules/pages/home-demo-two/home-demo-two.component';
import { InstructorsPageComponent } from './modules/pages/instructors-page/instructors-page.component';
import { InstructorsProfilePageComponent } from './modules/pages/instructors-profile-page/instructors-profile-page.component';
import { LoginPageComponent } from './modules/auth/login/login.component';
import { PricingPageComponent } from './modules/pages/pricing-page/pricing-page.component';
import { PrivacyPolicyPageComponent } from './modules/pages/privacy-policy-page/privacy-policy-page.component';
import { RegisterPageComponent } from './modules/auth/register/register.component';
import { TermsConditionsPageComponent } from './modules/pages/terms-conditions-page/terms-conditions-page.component';
import { ZoomMeetingsPageComponent } from './modules/pages/zoom-meetings-page/zoom-meetings-page.component';
import { UserPurchaseHistoryComponent } from './modules/student-dashboard/student-purchase-history/student-purchase-history.component';
import { UserReviewsComponent } from './modules/student-dashboard/student-reviews/student-reviews.component';
import { UserSettingsComponent } from './modules/student-dashboard/student-settings/student-settings.component';
import { ClassesResolver, SchoolsResolver } from './modules/auth/register/register.resolvers';
import { CurrentUserResolver } from './layout/layouts/student-dashboard/student-navbar/student-navbar.resolvers';
import { CourseResolver } from './modules/student-dashboard/student-courses/student-courses.resolvers';
import { LayoutComponent } from './layout/layouts/layout.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'index-2', component: HomeDemoTwoComponent},
    {path: 'index-3', component: HomeDemoThreeComponent},
    {path: 'courses', component: CoursesPageComponent},
    {path: 'courses-details', component: CoursesDetailsPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'instructors', component: InstructorsPageComponent},
    {path: 'instructor-profile', component: InstructorsProfilePageComponent},
    {path: 'become-an-instructor', component: BecomeAnInstrutorPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'event-details', component: EventsDetailsPageComponent},
    {path: 'zoom-meetings', component: ZoomMeetingsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {
        path: 'register', 
        component: RegisterPageComponent,
        resolve: {
            classes: ClassesResolver,
            schools: SchoolsResolver
        }
    },
    {path: 'faq', component: FaqPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'contact', component: ContactPageComponent},

    // Admin dashboard
    {path: 'admin-dashboard', component: AdminDashboardComponent},
    {path: 'admin-profile', component: AdminProfileComponent},
    {path: 'admin-courses', component: AdminCoursesComponent},
    {path: 'admin-purchase-history', component: AdminPurchaseHistoryComponent},
    {path: 'admin-settings', component: AdminSettingsComponent},

    // Student dashboard
    {
        path: 'student',
        component: LayoutComponent,
        data: {
            layout: 'student'
        },
        resolve: {
            user: CurrentUserResolver,
        },
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'student-dashboard' },
            {
                path: 'student-dashboard',
                loadChildren: () => import('src/app/modules/student-dashboard/student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule)
            },
            {
                path: 'student-profile',
                loadChildren: () => import('src/app/modules/student-dashboard/student-profile/student-profile.module').then(m => m.StudentProfileModule)
            },
            {
                path: 'student-enrolled-courses', 
                loadChildren: () => import('src/app/modules/student-dashboard/student-courses/student-courses.module').then(m => m.StudentCourseModule)
            },
            {
                path: 'student-purchase-history', 
                component: UserPurchaseHistoryComponent,
            },
            {
                path: 'student-settings', 
                component: UserSettingsComponent
            },
            {
                path: 'student-reviews', 
                component: UserReviewsComponent,
            },
        ]
    },

    // Instructor dashboard
    {path: 'instructor-dashboard', component: InstructorDashboardComponent},
    {path: 'instructor-dashboard-profile', component: InstructorProfileComponent},
    {path: 'instructor-courses', component: InstructorCoursesComponent},
    {path: 'add-courses', component: InstructorAddCoursesComponent},
    {path: 'instructor-purchase-history', component: InstructorPurchaseHistoryComponent},
    {path: 'instructor-earnings', component: InstructorEarningsComponent},
    {path: 'instructor-withdraw', component: InstructorWithdrawComponent},
    {path: 'instructor-students', component: InstructorStudentsComponent},
    {path: 'instructor-settings', component: InstructorSettingsComponent},

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }