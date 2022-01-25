import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
// import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
// import { environment } from 'environments/environment';

@NgModule({
    imports  : [
        HttpClientModule,
        // SocialLoginModule
    ],
    providers: [
        AuthService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi   : true
        },
        // {
        //   provide: 'SocialAuthServiceConfig',
        //   useValue: {
        //     autoLogin: false,
        //     providers: [
        //       {
        //         id: GoogleLoginProvider.PROVIDER_ID,
        //         provider: new GoogleLoginProvider(environment.googleClientId)
        //       },
        //       {
        //         id: FacebookLoginProvider.PROVIDER_ID,
        //         provider: new FacebookLoginProvider(environment.facebookClientId)
        //       }
        //     ]
        //   } as SocialAuthServiceConfig,
        // }
      ],
})
export class AuthModule
{
}
