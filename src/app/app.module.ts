import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-tabset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSimpleCountdownModule } from 'ngx-simple-countdown';
import { StickyNavModule } from 'ng2-sticky-nav';
import { CountUpModule } from 'ngx-countup';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { AccordionModule } from "ngx-accordion";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './modules/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './modules/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './modules/pages/home-demo-three/home-demo-three.component';
import { FooterComponent } from './layout/common/footer/footer.component';
import { NavbarComponent } from './layout/common/navbar/navbar.component';
import { SubscribeComponent } from './layout/common/subscribe/subscribe.component';
import { BlogComponent } from './layout/common/blog/blog.component';
import { TestimonialsComponent } from './layout/common/testimonials/testimonials.component';
import { InstructorsComponent } from './layout/common/instructors/instructors.component';
import { GetStartedComponent } from './layout/common/get-started/get-started.component';
import { UpcomingEventsComponent } from './layout/common/upcoming-events/upcoming-events.component';
import { AchievementComponent } from './layout/common/achievement/achievement.component';
import { GetRegisterComponent } from './layout/common/get-register/get-register.component';
import { PartnerComponent } from './layout/common/partner/partner.component';
import { CoursesComponent } from './layout/common/courses/courses.component';
import { CategoriesComponent } from './layout/common/categories/categories.component';
import { FeaturesComponent } from './layout/common/features/features.component';
import { HomeoneBannerComponent } from './modules/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { AboutComponent } from './layout/common/about/about.component';
import { HometwoBannerComponent } from './modules/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { FaqComponent } from './layout/common/faq/faq.component';
import { HomethreeBannerComponent } from './modules/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { ContactPageComponent } from './modules/pages/contact-page/contact-page.component';
import { BlogPageComponent } from './modules/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './modules/pages/blog-details-page/blog-details-page.component';
import { CoursesDetailsPageComponent } from './modules/pages/courses-details-page/courses-details-page.component';
import { CoursesPageComponent } from './modules/pages/courses-page/courses-page.component';
import { NotFoundComponent } from './layout/common/not-found/not-found.component';
import { WidgetSidebarComponent } from './layout/common/widget-sidebar/widget-sidebar.component';
import { FaqPageComponent } from './modules/pages/faq-page/faq-page.component';
import { PricingPageComponent } from './modules/pages/pricing-page/pricing-page.component';
import { LoginPageComponent } from './modules/auth/login/login.component';
import { RegisterPageComponent } from './modules/auth/register/register.component';
import { EventsPageComponent } from './modules/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './modules/pages/events-details-page/events-details-page.component';
import { AboutPageComponent } from './modules/pages/about-page/about-page.component';
import { PrivacyPolicyPageComponent } from './modules/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './modules/pages/terms-conditions-page/terms-conditions-page.component';
import { ZoomMeetingsPageComponent } from './modules/pages/zoom-meetings-page/zoom-meetings-page.component';
import { InstructorsPageComponent } from './modules/pages/instructors-page/instructors-page.component';
import { InstructorsProfilePageComponent } from './modules/pages/instructors-profile-page/instructors-profile-page.component';
import { BecomeAnInstrutorPageComponent } from './modules/pages/become-an-instrutor-page/become-an-instrutor-page.component';
import { ComingSoonPageComponent } from './modules/pages/coming-soon-page/coming-soon-page.component';
import { AdminDashboardComponent } from './modules/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminNavbarComponent } from './modules/admin-dashboard/admin-navbar/admin-navbar.component';
import { AdminProfileComponent } from './modules/admin-dashboard/admin-profile/admin-profile.component';
import { AdminCoursesComponent } from './modules/admin-dashboard/admin-courses/admin-courses.component';
import { AdminPurchaseHistoryComponent } from './modules/admin-dashboard/admin-purchase-history/admin-purchase-history.component';
import { AdminSettingsComponent } from './modules/admin-dashboard/admin-settings/admin-settings.component';
import { StudentDashboardComponent } from './modules/student-dashboard/student-dashboard/student-dashboard.component';
import { UserNavbarComponent } from './modules/student-dashboard/student-navbar/student-navbar.component';
import { UserCoursesComponent } from './modules/student-dashboard/student-courses/student-courses.component';
import { StudentProfileComponent } from './modules/student-dashboard/student-profile/student-profile.component';
import { UserPurchaseHistoryComponent } from './modules/student-dashboard/student-purchase-history/student-purchase-history.component';
import { UserSettingsComponent } from './modules/student-dashboard/student-settings/student-settings.component';
import { UserReviewsComponent } from './modules/student-dashboard/student-reviews/student-reviews.component';
import { InstructorDashboardComponent } from './modules/instructor-dashboard/instructor-dashboard/instructor-dashboard.component';
import { InstructorNavbarComponent } from './modules/instructor-dashboard/instructor-navbar/instructor-navbar.component';
import { InstructorCoursesComponent } from './modules/instructor-dashboard/instructor-courses/instructor-courses.component';
import { InstructorAddCoursesComponent } from './modules/instructor-dashboard/instructor-add-courses/instructor-add-courses.component';
import { InstructorProfileComponent } from './modules/instructor-dashboard/instructor-profile/instructor-profile.component';
import { InstructorPurchaseHistoryComponent } from './modules/instructor-dashboard/instructor-purchase-history/instructor-purchase-history.component';
import { InstructorEarningsComponent } from './modules/instructor-dashboard/instructor-earnings/instructor-earnings.component';
import { InstructorWithdrawComponent } from './modules/instructor-dashboard/instructor-withdraw/instructor-withdraw.component';
import { InstructorSettingsComponent } from './modules/instructor-dashboard/instructor-settings/instructor-settings.component';
import { InstructorStudentsComponent } from './modules/instructor-dashboard/instructor-students/instructor-students.component';
import { CoreModule } from './core/core.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

/**
 * Custom angular notifier options
 */
 const customNotifierOptions: NotifierOptions = {
    position: {
          horizontal: {
              position: 'right',
              distance: 12
          },
          vertical: {
              position: 'top',
              distance: 12,
              gap: 10
          }
      },
    theme: 'material',
    behaviour: {
      autoHide: 5000,
      onClick: 'hide',
      onMouseover: 'pauseAutoHide',
      showDismissButton: true,
      stacking: 4
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease'
      },
      hide: {
        preset: 'fade',
        speed: 300,
        easing: 'ease',
        offset: 50
      },
      shift: {
        speed: 300,
        easing: 'ease'
      },
      overlap: 150
    }
  };

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        HomeDemoThreeComponent,
        FooterComponent,
        NavbarComponent,
        SubscribeComponent,
        BlogComponent,
        TestimonialsComponent,
        InstructorsComponent,
        GetStartedComponent,
        UpcomingEventsComponent,
        AchievementComponent,
        GetRegisterComponent,
        PartnerComponent,
        CoursesComponent,
        CategoriesComponent,
        FeaturesComponent,
        HomeoneBannerComponent,
        AboutComponent,
        HometwoBannerComponent,
        FaqComponent,
        HomethreeBannerComponent,
        ContactPageComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        CoursesDetailsPageComponent,
        CoursesPageComponent,
        NotFoundComponent,
        WidgetSidebarComponent,
        FaqPageComponent,
        PricingPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        EventsPageComponent,
        EventsDetailsPageComponent,
        AboutPageComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        ZoomMeetingsPageComponent,
        InstructorsPageComponent,
        InstructorsProfilePageComponent,
        BecomeAnInstrutorPageComponent,
        ComingSoonPageComponent,
        AdminDashboardComponent,
        AdminNavbarComponent,
        AdminProfileComponent,
        AdminCoursesComponent,
        AdminPurchaseHistoryComponent,
        AdminSettingsComponent,
        StudentDashboardComponent,
        UserNavbarComponent,
        UserCoursesComponent,
        StudentProfileComponent,
        UserPurchaseHistoryComponent,
        UserSettingsComponent,
        UserReviewsComponent,
        InstructorDashboardComponent,
        InstructorNavbarComponent,
        InstructorCoursesComponent,
        InstructorAddCoursesComponent,
        InstructorProfileComponent,
        InstructorPurchaseHistoryComponent,
        InstructorEarningsComponent,
        InstructorWithdrawComponent,
        InstructorSettingsComponent,
        InstructorStudentsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSimpleCountdownModule,
        TabsModule,
        NgxScrollTopModule,
        StickyNavModule,
        CountUpModule,
        NotifierModule.withConfig(customNotifierOptions),

        // Core module of your application
        CoreModule,

        AccordionModule,

        // Roles and permissions modules
        NgxPermissionsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }