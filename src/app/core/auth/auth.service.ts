import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthUtils } from './auth.utils';
// import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    private _authenticated: boolean = false;

    /**
     * Constructor
     */
    constructor(
        private _httpClient: HttpClient,
        private _userService: UserService,
        // private _socialAuthService: SocialAuthService
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for access token
     */
    set accessToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string {
        return localStorage.getItem('accessToken') ?? '';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     *
     * @param email
     */
    forgotPassword(phone: string): Observable<any> {
        return this._httpClient.post('api/user/forgot/password', { phone });
    }

    /**
     * Reset password
     *
     * @param password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    /**
     * Sign in
     *
     * @param credentials
     */
    signIn(credentials: { userName: string; password: string }): Observable<any> {
        // Throw error, if the user is already logged in
        if (this._authenticated) {
            return throwError('L\'utilisateur est déjà connecté.');
        }

        return this._httpClient.post('api/auth/login', credentials, { withCredentials: false }).pipe(
            switchMap((response: any)=>{
                // Store the access token in the local storage
                this.accessToken = response.access_token;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service
                this._userService.user = response.user;
                
                // Return a new observable with the response
                return of(response.user);
            }),
        );
    }

    /**
     * Sign in using the access token
     */
    signInUsingToken(): Observable<any> {
        // Renew token
        return this._httpClient.post('api/user/refresh/token', {}, { withCredentials: false })
            .pipe(
                catchError(() =>

                    // Return false
                    of(false)
                ),
                switchMap(({ user, token }: any) => {

                    // Store the access token in the local storage
                    this.accessToken = token;

                    // Set the authenticated flag to true
                    this._authenticated = true;

                    // Store the user on the user service
                    this._userService.user = user;

                    // Return true
                    return of(true);
                })
            );
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        return this._httpClient.get('api/auth/logout').pipe(
            switchMap((response: any)=>{
                // Remove the access token from the local storage
                localStorage.removeItem('accessToken');

                console.log(response);
                // Set the authenticated flag to false
                this._authenticated = false;
                
                // Return the observable
                return of(response);
            }),
        );
    }

    /**
     * Sign up
     *
     * @param user
     */
    signUp(user: any): Observable<any> {
        return this._httpClient.post('api/users', user);
    }

    /**
     * Unlock session
     *
     * @param credentials
     */
    unlockSession(credentials: { email: string; password: string }): Observable<any> {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    /**
     * Check the authentication status
     */
    check(): Observable<boolean> {
        // Check if the user is logged in
        if (this._authenticated) {
            return of(true);
        }

        // Check the access token availability
        if (!this.accessToken) {
            return of(false);
        }

        // Check the access token expire date
        if (AuthUtils.isTokenExpired(this.accessToken)) {
            return of(false);
        }

        // If the access token exists and it didn't expire, sign in using it
        return this.signInUsingToken();
    }

    /**
     * Activate user account
     *
     * @param payload
     */
    activateAccount(payload: { activationCode: string; phone: string }): Observable<any> {
        return this._httpClient.post('api/user/activate', payload);
    }

    /**
     * Resend actuvation code
     *
     * @param phone
     */
    resendActivationCode(phone: { phone: string }): Observable<any> {
        return this._httpClient.post('api/user/resend/code', phone);
    }

    /**
     * Sign in with social: Google, Facebook or Apple
     */
    // signInWithSocial(providerId: string): Observable<any> {
    //     return from(this._socialAuthService.signIn(providerId)).pipe(
    //         catchError(() =>

    //             of(false)
    //         ),
    //         switchMap((socialUser: SocialUser) => {

    //             if (socialUser) {
    //                 const loginData = {
    //                     firstName: socialUser.firstName || '',
    //                     lastName: socialUser.lastName || '',
    //                     email: socialUser.email,
    //                     phone: '',
    //                     source: socialUser.provider,
    //                     profile: socialUser.photoUrl || ''
    //                 };

    //                 return this._httpClient.post('api/user/social/login', loginData, { withCredentials: true }).pipe(
    //                     catchError(() =>

    //                         of(false)
    //                     ),
    //                     switchMap(({ token, user }: any) => {

    //                         this.accessToken = token;
    //                         this._authenticated = true;
    //                         this._userService.user = user;

    //                         return of(true);
    //                     })
    //                 );
    //             }

    //             return of(false);
    //         }
    //     ));
    // }
}
